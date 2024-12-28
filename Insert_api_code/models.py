from django.db import models
from django.core.validators import MinValueValidator
from django.utils import timezone

# Create your models here.
class Harvest(models.Model):
    Name = models.CharField(max_length=1000)  # Ensures the name is always a string
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])  # Supports integer, float, and decimal values
    images = models.JSONField()  # To store a list of strings representing image URLs or paths
    stock = models.BooleanField(default=True)  
    date = models.DateTimeField(null=True, blank=True)
    brand = models.CharField(max_length=100,default="Default Brand")
    product_url = models.URLField(null=True, blank=True, max_length=5000)
    class Meta:
        db_table = 'Harvest_data_table'