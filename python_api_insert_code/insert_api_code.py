import requests
import json

data = [
    {
        "Name": "Samsung Galaxy M35 5G (Thunder Grey, 8GB RAM, 128GB Storage) | Corning Gorilla Glass Victus+ | AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display | Without Charger",
        "price": 16499,
        "Images": [
            "https://m.media-amazon.com/images/I/51nX5R2aVOL._SX500_SY500_CR,0,0,500,500_.jpg",
            "https://m.media-amazon.com/images/I/51lbiKjR+aL._SX500_SY500_CR,0,0,500,500_.jpg"
        ],
        "Stock": True,
        "Date": "2024-12-29 01:01:10",
        "BrandName": "Samsung",
        "ProductUrl": "https://www.amazon.in/Samsung-Thunder-Storage-Corning-Gorilla/dp/B0D813539C/"
    },
    {
        "Name": "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage) | Snapdragon 695 | 108MP Camera | 120Hz LCD Display | 5000mAh Battery",
        "price": 19999,
        "Images": [
            "https://m.media-amazon.com/images/I/61e0ZgrtNUL._SX500_SY500_CR,0,0,500,500_.jpg",
            "https://m.media-amazon.com/images/I/61whfC4TlgL._SX500_SY500_CR,0,0,500,500_.jpg"
        ],
        "Stock": True,
        "Date": "2024-12-29 01:10:15",
        "BrandName": "OnePlus",
        "ProductUrl": "https://www.amazon.in/OnePlus-Nord-CE-3-Lite/dp/B0BPFYY5SC/"
    },
    {
        "Name": "Redmi Note 12 Pro+ 5G (Arctic White, 8GB RAM, 256GB Storage) | 200MP Camera | 120W HyperCharge | AMOLED Display | 5000mAh Battery",
        "price": 24999,
        "Images": [
            "https://m.media-amazon.com/images/I/81h9TZpMw4L._SX500_SY500_CR,0,0,500,500_.jpg",
            "https://m.media-amazon.com/images/I/71an9eiBxpL._SX500_SY500_CR,0,0,500,500_.jpg"
        ],
        "Stock": True,
        "Date": "2024-12-29 01:15:30",
        "BrandName": "Redmi",
        "ProductUrl": "https://www.amazon.in/Redmi-Note-12-Pro-Plus/dp/B0BRZ8MNZJ/"
    },
    {
        "Name": "Realme Narzo 60 5G (Cosmic Black, 6GB RAM, 128GB Storage) | Dimensity 6020 | 64MP Camera | 120Hz Super AMOLED Display | 5000mAh Battery",
        "price": 17999,
        "Images": [
            "https://m.media-amazon.com/images/I/71QlbhGSa1L._SX500_SY500_CR,0,0,500,500_.jpg",
            "https://m.media-amazon.com/images/I/61FMDVdttOL._SX500_SY500_CR,0,0,500,500_.jpg"
        ],
        "Stock": True,
        "Date": "2024-12-29 01:20:00",
        "BrandName": "Realme",
        "ProductUrl": "https://www.amazon.in/Realme-Narzo-60-5G/dp/B0C9QG7ZLM/"
    },
    {
        "Name": "iPhone 15 (Midnight, 128GB) | A16 Bionic Chip | Super Retina XDR Display | Ceramic Shield",
        "price": 79999,
        "Images": [
            "https://m.media-amazon.com/images/I/71fLz4-BkjL._SX500_SY500_CR,0,0,500,500_.jpg",
            "https://m.media-amazon.com/images/I/71aC+5lJGRL._SX500_SY500_CR,0,0,500,500_.jpg"
        ],
        "Stock": True,
        "Date": "2024-12-29 01:25:10",
        "BrandName": "Apple",
        "ProductUrl": "https://www.amazon.in/Apple-iPhone-15/dp/B0CD12345A/"
    },
    {
        "Name": "Google Pixel 7a (Sea, 8GB RAM, 128GB Storage) | Tensor G2 Chip | 90Hz OLED Display | 4385mAh Battery",
        "price": 43999,
        "Images": [
            "https://m.media-amazon.com/images/I/71qLmHX3M7L._SX500_SY500_CR,0,0,500,500_.jpg",
            "https://m.media-amazon.com/images/I/71QFs0yTBUL._SX500_SY500_CR,0,0,500,500_.jpg"
        ],
        "Stock": True,
        "Date": "2024-12-29 01:30:05",
        "BrandName": "Google",
        "ProductUrl": "https://www.amazon.in/Google-Pixel-7a/dp/B0CFR1234A/"
    },
    {
        "Name": "Vivo V29e 5G (Artistic Red, 8GB RAM, 256GB Storage) | 50MP Selfie Camera | 120Hz AMOLED Display | 5000mAh Battery",
        "price": 28999,
        "Images": [
            "https://m.media-amazon.com/images/I/61hGMxQMP5L._SX500_SY500_CR,0,0,500,500_.jpg",
            "https://m.media-amazon.com/images/I/71FsTQx5bdL._SX500_SY500_CR,0,0,500,500_.jpg"
        ],
        "Stock": True,
        "Date": "2024-12-29 01:35:15",
        "BrandName": "Vivo",
        "ProductUrl": "https://www.amazon.in/Vivo-V29e-5G/dp/B0CH12345B/"
    }
]



url = "http://127.0.0.1:8000/api/harvest"

for i in data:
    payload = json.dumps(i)
    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(json.loads(response.text))
