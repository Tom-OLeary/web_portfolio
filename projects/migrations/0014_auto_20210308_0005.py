# Generated by Django 3.1.5 on 2021-03-08 00:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0013_project_readme'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='technology',
            field=models.CharField(max_length=200),
        ),
    ]
