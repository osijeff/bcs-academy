# accounts/serializers.py
import re
from rest_framework import serializers
from .models import CourseRegistration
from .models import ContactForm
from rest_framework import generics


class CourseRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseRegistration
        fields = [
            'id',
            'first_name',
            'last_name',
            'email',
            'phone',
            'address',
            'id_or_passport',
            'training_type',
            'course_category',
            'course',
            'program_type',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_phone(self, value):
        # Add custom phone number validation if needed
        phone_number = re.sub(r'\D', '', value)
        if not 10 <= len(phone_number) <= 15:
            raise serializers.ValidationError("Phone number must be between 10 and 15 digits.")
        return value

    def validate_id_or_passport(self, value):
        # Add custom ID or passport number validation if needed
        return value

    def validate(self, data):
        # Add any cross-field validation here
        return data   
        


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'subject', 'message']
        read_only_fields = ['id']
        
    def validate_phone(self, value):
        # Add custom phone number validation if needed
        phone_number = re.sub(r'\D', '', value)
        if not 10 <= len(phone_number) <= 15:
            raise serializers.ValidationError("Phone number must be between 10 and 15 digits.")
        return value
    
    
    
    
