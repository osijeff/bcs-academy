from django.db import models

# Create your models here.


from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Categories"

from django.db import models

from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    img = models.ImageField(upload_to='course_images/')
    duration = models.CharField(max_length=100)
    level = models.CharField(max_length=50)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    start_date = models.DateField()
    learning_outcomes = models.JSONField(default=list)
    requirements = models.JSONField(default=list)
    instructor = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.title