# Generated by Django 3.1.5 on 2021-03-04 23:48

from django.db import migrations, models
import relativefilepathfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_auto_20210304_2347'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='images',
            field=relativefilepathfield.fields.RelativeFilePathField(default='projects/static/img/project3.png', path='/Users/Tom/PythonProjects/web_portfolio/projects/static/img/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.FilePathField(path='/img'),
        ),
    ]
