from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import SerializerMethodField
from rest_framework import serializers
from dishes.models import Dish , Category

class DishesSerializer (ModelSerializer):

    category = serializers.StringRelatedField(many=True)
    user_name = SerializerMethodField()

    class Meta : 
        model = Dish 
        fields = ("id","featured_image","date","dish_name","category","user_name")

    def get_user_name(self, instance):
        return instance.user_name.username



class RecipeeSerializer (ModelSerializer):

    category = serializers.StringRelatedField(many=True)
    user_name = SerializerMethodField()


    class Meta : 
        model = Dish 
        fields = ("id","featured_image","date","dish_name","category","ingredients","recipee","user_name")

        
    def get_user_name(self, instance):
        return instance.user_name.username
    

    
class CategorySerializer (ModelSerializer):


    class Meta : 
        model = Category 
        fields = ("id","name")