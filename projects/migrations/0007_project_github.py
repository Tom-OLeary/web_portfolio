# Generated by Django 3.1.5 on 2021-03-05 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0006_remove_project_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='github',
            field=models.URLField(default=''),
        ),
    ]
