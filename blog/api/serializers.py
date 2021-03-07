from rest_framework import serializers
from blog.models import Post, Task


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
