from django.db import models

# Create your models here.
class Blog(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.TextField(max_length=200)
    # img = models.ImageField()
    content = models.TextField()
    description = models.CharField(max_length=300, default='')
    custom_url = models.CharField(max_length=100)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Contact(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=80)
    email = models.EmailField(max_length=50)
    subject = models.CharField(max_length=100, default=None)
    phone = models.CharField(max_length=12)
    desc = models.TextField()
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
