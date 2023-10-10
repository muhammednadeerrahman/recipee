from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import SerializerMethodField
from rest_framework import serializers
from dishes.models import Dish

class DishesSerializer (ModelSerializer):

    category = serializers.StringRelatedField(many=True)

    class Meta : 
        model = Dish 
        fields = ("id","featured_image","date","dish_name","category")



class RecipeeSerializer (ModelSerializer):

    category = serializers.StringRelatedField(many=True)

    class Meta : 
        model = Dish 
        fields = ("id","featured_image","date","dish_name","category","ingredients","recipee")
