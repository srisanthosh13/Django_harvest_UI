from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name='index1'),
    # path('api/add/', views.add_to_cart, name='add_to_cart'),
    # path('api/delete/<str:product_name>/', views.delete_from_cart, name='delete_from_cart'),
    path('api/harvest', views.create_harvest, name='create_harvest'),
]
