# Generated by Django 3.1.5 on 2021-02-05 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='condition',
            field=models.CharField(default=True, max_length=100),
            preserve_default=False,
        ),
    ]
