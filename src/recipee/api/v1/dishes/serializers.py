from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import SerializerMethodField
from rest_framework import serializers
from dishes.models import Dish

class DishesSerializer (ModelSerializer):

    category=SerializerMethodField()

    class Meta : 
        model = Dish 
        fields = ("id","featured_image","date","dish_name","category")

        def get_category(self, instance):
            return instance.category.name
