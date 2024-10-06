from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Category, Course

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category')
    list_filter = ('category',)
    search_fields = ('id', 'title', 'description')