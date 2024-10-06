from django.urls import path
from . import views
from .views import CourseDetailView
app_name = 'courses'  # This sets the application namespace

urlpatterns = [
    path('api/courses/', views.CourseList.as_view(), name='course-list'),
     path('api/courses/<str:course_id>/', CourseDetailView.as_view(), name='course-detail'),
    # Add other course-related URL patterns here
]