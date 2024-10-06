from rest_framework import serializers
from .models import Category, Course

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']

class CourseSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Course
        fields = '__all__'

class CourseDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'img', 'category']