from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from scrapy.http import TextResponse

import time
class Instagram:
    @ staticmethod
    def __init__(url):
        options = webdriver.ChromeOptions()
        options.add_experimental_option("detach", True)

        driver = webdriver.Chrome(options=options)

        driver.get(url)
        page_source = driver.page_source
        response = TextResponse(url = url, body = page_source, encoding="utf-8")

        product_list = response.xpath("//div[@class='s-main-slot s-result-list s-search-results sg-row']/div[@role]")
        sku_list=[]
        for i in product_list:
            sku={}
            sku["RetailerName"] = 'Amazon'
            sku["ProductUrl"] = 'https://www.amazon.in' + i.xpath('.//a[@class="a-link-normal s-no-outline"]/@href').extract_first()
            sku_list.append(sku)
        print(sku_list)



        driver.close()


insta = Instagram("https://www.amazon.in/s?k=mobiles")

