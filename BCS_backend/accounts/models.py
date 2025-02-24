from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email
    
    
    
    
    
    
#  course registration model

class CourseRegistration(models.Model):
    TRAINING_CHOICES = [
        ('Individual Training', 'Individual Training'),
        # Add other training types if needed
    ]
    
    PROGRAM_CHOICES = [
        ('Learnership', 'Learnership'),
        # Add other program types if needed
    ]

    COURSE_CATEGORIES = [
        ('Project Management', 'Project Management'),
        ('Finance', 'Finance'),
        ('Information Technology', 'Information Technology'),
        ('Office Administration', 'Office Administration'),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    id_or_passport = models.CharField(max_length=50)
    training_type = models.CharField(max_length=50, choices=TRAINING_CHOICES, default='Individual Training')
    course_category = models.CharField(max_length=50, choices=COURSE_CATEGORIES)
    course = models.CharField(max_length=200)  # You might want to create a separate Course model for better organization
    program_type = models.CharField(max_length=50, choices=PROGRAM_CHOICES, default='Learnership')
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.course}"

    class Meta:
        ordering = ['-created_at']
        
        


from django.db import models

class ContactForm(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)  # Phone is optional
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.subject}"
