from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Course
from .serializers import CourseDetailSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Course
from .serializers import CategorySerializer, CourseSerializer

class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class CourseList(APIView):
    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

class CourseDetailView(APIView):
    def get(self, request, course_id):
        try:
            course = Course.objects.get(id=course_id)
            serializer = CourseSerializer(course)
            return Response(serializer.data)
        except Course.DoesNotExist:
            return Response({"error": "Course not found"}, status=404)