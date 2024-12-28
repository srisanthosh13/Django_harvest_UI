from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from Insert_api_code.models import Harvest
from django.http import JsonResponse
from datetime import datetime
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


def home(request):
    # Check if the user is logged in
    if not request.user.is_authenticated:
        # Redirect to the login page if the user is not authenticated
        return redirect('login')  # Ensure 'login' is the name of your login URL

    # Initialize variables
    date_str = None
    selected_brand = None
    filtered_records = Harvest.objects.all()  # Default: show all records

    if request.method == 'POST':
        # Get the selected brand and date from the form
        selected_brand = request.POST.get('brand')
        date_str = request.POST.get('date')

        # Apply filters if provided
        if selected_brand and date_str:
            filtered_records = Harvest.objects.filter(brand=selected_brand, date__date=date_str)
        elif selected_brand:
            filtered_records = Harvest.objects.filter(brand=selected_brand)
        elif date_str:
            filtered_records = Harvest.objects.filter(date__date=date_str)

    else:
        # Default behavior: show records for the current date
        current_date = datetime.today().date()
        filtered_records = Harvest.objects.filter(date__date=current_date)
        date_str = current_date

    # Extract unique brand names for the dropdown
    unique_brands = Harvest.objects.values_list('brand', flat=True).distinct()

    return render(request, 'home.html', {
        'filtered_records': filtered_records,
        'selected_date': date_str,
        'unique_brands': unique_brands,
        'selected_brand': selected_brand,
    })
