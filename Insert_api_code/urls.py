from django.urls import path
from . import views

urlpatterns = [
    path('api/harvest', views.create_harvest, name='create_harvest'),
    path('api/insertMasterData', views.insert_master_data, name= 'insert_data'),
]
