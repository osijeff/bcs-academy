# accounts/views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
# from .serializers import UserRegistrationSerializer
# from .serializers import UserUpdateSerializer
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render, redirect
from django.contrib.auth import login
# from .forms import CustomUserCreationForm
from rest_framework import generics
from .models import CourseRegistration
from .serializers import CourseRegistrationSerializer
from django.http import JsonResponse
from .serializers import ContactFormSerializer
from .models import  ContactForm
from django.shortcuts import redirect
import os

class CourseRegistrationCreateView(generics.CreateAPIView):
    queryset = CourseRegistration.objects.all()
    serializer_class = CourseRegistrationSerializer


# def register(request):
#     if request.method == 'POST':
#         form = CustomUserCreationForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)  # Automatically log the user in after registration
#             return render('home')  # Redirect to a home page or dashboard after registration
#     else:
#         form = CustomUserCreationForm()
#     return render(request, 'accounts/register.html', {'form': form})


# class UserRegistrationView(APIView):
#     def post(self, request):
#         serializer = UserRegistrationSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# class UserUpdateView(APIView):
#     permission_classes = [IsAuthenticated]

    # def put(self, request):
    #     serializer = UserUpdateSerializer(request.user, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response({"message": "Profile updated successfully"}, status=status.HTTP_200_OK)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

# class CourseRegistrationCreateView(generics.CreateAPIView):
#     queryset = CourseRegistration.objects.all()
#     serializer_class = CourseRegistrationSerializer
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]
    
class CourseRegistrationListView(generics.ListAPIView):
    queryset = CourseRegistration.objects.all()
    serializer_class = CourseRegistrationSerializer
    
    
class CourseRegistrationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseRegistration.objects.all()
    serializer_class = CourseRegistrationSerializer
    
    
    



# class ContactFormCreateView(generics.CreateAPIView):
#     queryset = ContactForm.objects.all()
#     serializer_class = ContactFormSerializer




class ContactFormCreateView(APIView):
    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ContactFormListView(generics.ListAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer
    
    
# FRONTEND_URL = os.getenv('FRONTEND_URL', 'http://localhost:5173/')



# def home(request):
#     return redirect(FRONTEND_URL)  # Redirect to your React app

    