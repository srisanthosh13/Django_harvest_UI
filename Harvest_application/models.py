from django.db import models

# Create your models here.

class Login(models.Model):
    id = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=25)
    class Meta:
        db_table = 'login_details'