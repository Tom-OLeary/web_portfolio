# Generated by Django 3.1.5 on 2021-03-07 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0008_project_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='demo',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='sourceCode',
            field=models.BooleanField(default=False),
        ),
    ]
