# Generated by Django 3.1.5 on 2021-03-04 23:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0005_auto_20210304_2348'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='images',
        ),
    ]
