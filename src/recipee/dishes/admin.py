from django.contrib import admin
from dishes.models import Dish, Category, UserProfile, Comment


class AdminDish(admin.ModelAdmin):
    list_display = ["id","dish_name","user_name"]

    
admin.site.register(Dish,AdminDish)


admin.site.register(Category)


admin.site.register(UserProfile)


admin.site.register(Comment)


