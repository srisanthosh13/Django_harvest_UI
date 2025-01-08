from django.db import models

# Create your models here.

class Login(models.Model):
    id = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=25)
    class Meta:
        db_table = 'login_details'


class Master(models.Model):
    url = models.URLField(null=True, blank=True, max_length=5000)
    retailer = models.CharField(max_length=100)
    class Meta:
        db_table = 'Master_data'
