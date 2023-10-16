import uuid

from django.db import models


class Dish (models.Model):
    id = models.UUIDField(primary_key=True,default=uuid.uuid4)
    dish_name = models.CharField(max_length=255)
    category = models.ManyToManyField("dishes.Category")
    ingredients = models.TextField()
    recipee = models.TextField()
    user_name = models.ForeignKey("auth.User",on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    featured_image = models.FileField(upload_to="media/Dish_image",null=True,blank=True)
    
    class Meta: 
        verbose_name_plural = "Dishes"

    def __str__(self):
        return self.dish_name
    

class Category (models.Model):
    name = models.CharField(max_length=255)

    class Meta : 
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name
    

class Likes (models.Model):
    username = models.ma("auth.User")
    dish = models.ForeignKey("dishes.Dish")
    