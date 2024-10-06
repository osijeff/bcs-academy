# accounts/urls.py

from django.urls import path
from .views import CourseRegistrationCreateView, CourseRegistrationListView, CourseRegistrationDetailView
from .views import ContactFormCreateView
# from .views import home
urlpatterns = [
    # path('', home, name='home'),
    path('api/register/', CourseRegistrationCreateView.as_view(), name='course_registration'),
    path('api/registrations/', CourseRegistrationListView.as_view(), name='course_registration_list'),
    path('api/registrations/<int:pk>/', CourseRegistrationDetailView.as_view(), name='course_registration_detail'),
    path('api/contact/', ContactFormCreateView.as_view(), name='contact_form_create'),
]