from django.urls import path
from . import views

urlpatterns = [
    path('api/harvest', views.create_harvest, name='create_harvest'),
]
