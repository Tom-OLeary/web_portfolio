# Generated by Django 3.1.5 on 2021-03-07 00:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0010_auto_20210307_0048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='demo',
            field=models.CharField(default='', max_length=20),
        ),
    ]
