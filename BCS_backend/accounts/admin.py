from django.contrib import admin


from .models import CourseRegistration

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import ContactForm


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm  # Form for adding new users
    form = CustomUserChangeForm  # Form for changing user details
    model = CustomUser
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)



@admin.register(CourseRegistration)
class CourseRegistrationAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'course', 'training_type', 'program_type', 'created_at')
    list_filter = ('training_type', 'program_type', 'course_category', 'created_at')
    search_fields = ('first_name', 'last_name', 'email', 'course')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Personal Information', {
            'fields': ('first_name', 'last_name', 'email', 'phone', 'address', 'id_or_passport')
        }),
        ('Course Information', {
            'fields': ('training_type', 'course_category', 'course', 'program_type')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

# If you prefer not to use the @admin.register decorator, you can use this instead:
# admin.site.register(CourseRegistration, CourseRegistrationAdmin)

class ContactFormAdmin(admin.ModelAdmin):

    list_display = ('first_name', 'last_name', 'email', 'phone', 'subject')  
    search_fields = ('first_name', 'last_name', 'email', 'subject')  
    list_filter = ('subject',) 
    ordering = ('-id',)  

admin.site.register(ContactForm, ContactFormAdmin)