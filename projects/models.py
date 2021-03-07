from django.db import models


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=20)
    image = models.FilePathField(path="/img")
    condition = models.CharField(max_length=100)
    github = models.URLField(max_length=200, default='')
    video = models.FilePathField(path="/videos", default='')
    sourceCode = models.BooleanField(default=False)
    demo = models.BooleanField(default=False)
    readme = models.URLField(max_length=200, default='')

