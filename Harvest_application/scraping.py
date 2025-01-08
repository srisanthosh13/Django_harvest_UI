from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from scrapy.http import TextResponse
import json
import requests
import yaml
from datetime import datetime

import time
class StartHarvest:
    def get_url(url_list):
        yaml_path = r'Harvest_application\retailer_yaml\amazon.yaml'
        response_list = []
        options = webdriver.ChromeOptions()
        options.add_experimental_option("detach", True)

        driver = webdriver.Chrome(options=options)

        for url in url_list[0:5]:
            driver.get(url)
            page_source = driver.page_source
            time.sleep(3)
            response = TextResponse(url = url, body = page_source, encoding="utf-8")
            print(response)
            # time.sleep(10)
            # response_list.append(response)
            get_data = extract_data(yaml_path,response, url)
            print('data',get_data)
            insert_data(get_data)
            

            
        # get_data = extract_data(yaml_path,response_list)

        print('data', get_data)
        
        driver.close()

def insert_data(data):
    apiurl = "http://127.0.0.1:8000/api/harvest"
    # print(data)
    payload = json.dumps(data)
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", apiurl, headers=headers, data=payload)

    print(json.loads(response.text))


def harvest_config(path):
    absolute_path = path
    with open(absolute_path) as stream:
        config = yaml.safe_load(stream)
    return config

def extract_data(file_path, res, url):
    config = harvest_config(file_path)

    # print(config)
    product_json = {}
    product_json["Stock"] = False
    product_json["Name"] = res_eval_value(res, config, 'name')
    product_json["price"] = res_eval_value(res, config, 'price')
    if product_json["price"]:
        product_json["price"] = int(product_json["price"])

    product_json["Stock"] = res_eval_value(res, config, 'availability')
    if product_json["Stock"]:
        if product_json["Stock"].lower() not in ['out of stock']:
            product_json["Stock"] = True
    product_json["Images"] = res_eval_value(res, config, 'image_list')
    product_json["Date"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    product_json["BrandName"] = res_eval_value(res, config, 'brand')
    print('brand name',product_json["BrandName"])
    product_json["ProductUrl"] = url



    if product_json['Images']:
        product_json['Images'] = [i.replace('SX38','SX500').replace('SY50','SY500') for i in product_json['Images']]

    
    return product_json
    

                

def res_eval_value(res, scrap_config_yaml, attribute):
        try:
            get_atribute = scrap_config_yaml[attribute]
            if get_atribute:
                for value in get_atribute:
                    try:
                        extract_value = eval(value)
                        if extract_value and str(extract_value).strip():
                            return extract_value
                        else:
                            continue
                    except Exception as e:
                        continue
            return ""
        except Exception as e:
            return ''
        

