from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from Insert_api_code.models import Harvest
from .models import Master
from django.http import JsonResponse
from datetime import datetime
from .scraping import StartHarvest
# Create your views here.

def login_check(request):

    context  = {
        "error": request.session.pop("error", "")
    }
    if request.method == 'POST':
        print(request.POST)
        user = authenticate(username = request.POST['user'], password = request.POST['pass'])
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            request.session["error"] = "*Invalid username or password"
            return redirect('login')

    return render(request, 'login.html', context)

def log_out(request):
    logout(request)
    return redirect('/')

def login_page(request):
    return render(request, 'login.html')

def home(request):
    # Check if the user is logged in
    if not request.user.is_authenticated:
        # Redirect to the login page if the user is not authenticated
        return redirect('login')  # Ensure 'login' is the name of your login URL

    # Initialize variables
    date_str = None
    selected_brand = None
    stock = None
    current_date = None
    filtered_records = Harvest.objects.all()  # Default: show all records

    if request.method == 'POST':
        # Get the selected brand and date from the form
        selected_brand = request.POST.get('brand')
        date_str = request.POST.get('date')
        stock = request.POST.get('stock')
        print('sdfsdfsfd',selected_brand, date_str, stock)

        # Apply filters if provided
        if stock and selected_brand:
            print('5')
            filtered_records = Harvest.objects.filter(stock=stock, brand=selected_brand)
            print('filtered_records', filtered_records)
        elif stock and date_str:
            print('4')
            filtered_records = Harvest.objects.filter(stock=stock, date__date=date_str)
        elif selected_brand and date_str:
            print('1')
            filtered_records = Harvest.objects.filter(brand=selected_brand, date__date=date_str)
        elif selected_brand:
            print('2')
            filtered_records = Harvest.objects.filter(brand=selected_brand)
        elif date_str:
            print('3')
            filtered_records = Harvest.objects.filter(date__date=date_str)

    else:
        # Default behavior: show records for the current date
        current_date = datetime.today().date()
        filtered_records = Harvest.objects.filter(date__date=current_date)
        date_str = current_date

    # Extract unique brand names for the dropdown
    unique_brands = Harvest.objects.filter(date__date=date_str).values_list('brand', flat=True).distinct()

    return render(request, 'home.html', {
        'filtered_records': filtered_records,
        'selected_date': date_str,
        'unique_brands': unique_brands,
        'selected_brand': selected_brand,
        'selected_stock': stock,
        'current_date':current_date,
    })


def start_harvest(request):
    return render(request, "start.html")


def harvest(request):
    data = Master.objects.all()
    url_list = list(data.values_list('url', flat=True))
    # print(url_list)
    StartHarvest.get_url(url_list)
    log_button= True
    return render(request, 'start.html',{"login_button": log_button})