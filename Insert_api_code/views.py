from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .models import Harvest

@method_decorator(csrf_exempt, name='dispatch')  # Disable CSRF for API requests
def create_harvest(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)
            # print("data",data)
            name = data.get('Name')
            price = data.get('price')
            image_array = data.get('Images')
            stock_availability = data.get('Stock')
            date = data.get('Date')
            brand = data.get('BrandName')
            url = data.get('ProductUrl')
            # print(type(stock_availability))
            # print(stock_availability)

            # Validate data
            if not name or not isinstance(name, str):
                return JsonResponse({'error': 'Name is required and must be a string'}, status=400)
            if not price:
                return JsonResponse({'error': 'Price is required and must be an integer'}, status=400)
            if not image_array or not isinstance(image_array, list):
                return JsonResponse({'error': 'Images is required and must be an list'}, status = 400)
            if not stock_availability and stock_availability != False or not isinstance(stock_availability, bool):
                return JsonResponse({'error': 'Stock is required and must be an boolean'}, status = 400)
            if not date:
                return JsonResponse({'error': 'Date is missing'}, status = 400)
            if not brand and isinstance(brand, str):
                return JsonResponse({'error': 'BrandName is required and must be a string'}, status = 400)
            if not url:
                return JsonResponse({'error': 'Product url is required'})

            # Save to database
            harvest = Harvest(Name=name, price=price, images = image_array, stock = stock_availability, 
                              date = date, brand = brand, product_url= url)
            harvest.save()

            return JsonResponse({
                'message': 'Harvest data added successfully!'
                # 'data': {'id': harvest.id, 'Name': harvest.Name, 'price': harvest.price,}
            }, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Invalid HTTP method. Only POST is allowed.'}, status=405)
