# Generated by Django 3.0.7 on 2021-01-20 09:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Blog', '0003_blog_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='slug',
            new_name='custom_url',
        ),
    ]