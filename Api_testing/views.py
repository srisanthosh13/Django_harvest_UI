# from django.shortcuts import render, redirect
# from django.http import JsonResponse

# # Simulating a global cart (in-memory storage)
# cart = []

# def index(request):
#     return render(request, 'index1.html', {'cart': cart})
# # 
# def add_to_cart(request):
#     if request.method == 'POST':
#         product = {'name': request.POST.get('name')}
#         cart.append(product)
#         return redirect('index1')  # Redirect to the index page
#     return JsonResponse({'error': 'Invalid method'}, status=400)

# def delete_from_cart(request, product_name):
#     global cart
#     cart = [product for product in cart if product['name'] != product_name]
#     return redirect('index1')


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
            print("data",data)
            name = data.get('Name')
            price = data.get('price')

            # Validate data
            if not name or not isinstance(name, str):
                return JsonResponse({'error': 'Name is required and must be a string'}, status=400)
            if not price or not isinstance(price, int):
                return JsonResponse({'error': 'Price is required and must be an integer'}, status=400)

            # Save to database
            harvest = Harvest(Name=name, price=price)
            harvest.save()

            return JsonResponse({
                'message': 'Harvest data added successfully!',
                'data': {'id': harvest.id, 'Name': harvest.Name, 'price': harvest.price}
            }, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Invalid HTTP method. Only POST is allowed.'}, status=405)
