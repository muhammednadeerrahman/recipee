
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from dishes.models import Dish, Category
from api.v1.dishes.serializers import DishesSerializer,RecipeeSerializer, CategorySerializer


@api_view(["GET"])
@permission_classes([AllowAny])
def dishes(request):
    instance = Dish.objects.filter(is_deleted = False)


    context = {
        "request" : request
    }
    serializer = DishesSerializer(instance, many= True,context = context)
    request_data = {
        "status_code" : 6000,
        "data" : serializer.data,
        "message" : "sucecss"
    }
    return Response (request_data)



@api_view(["GET"])
@permission_classes([AllowAny])
def recipee(request, id):
    if Dish.objects.filter(pk=id).exists():    
        instance = Dish.objects.get(pk=id)
        context = {
        "request" : request
        }
        serializer = RecipeeSerializer(instance,context = context)
        request_data = {
            "status_code" : 6000,
            "data" : serializer.data,
            "message" : "sucecss"
        }
        return Response (request_data)
    else:
        response_data =  {
            "status_code" : 6001,
            "message" : "oops..! recipee not found"
        }
        return Response (response_data)
    

@api_view(["GET"])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create(request):

    dish_name = request.data["dish_name"]
    ingredients = request.data["ingredients"]
    recipee = request.data["recipee"]
    user_name = request.user
    featured_image = request.data["featured_image"]
    categories_ids = request.data.get("category")

    selected_categories_ids = [int(id) for id in categories_ids.split(',')]
    
    print(selected_categories_ids)

    instance = Dish.objects.create(
        dish_name = dish_name,
        ingredients = ingredients,
        recipee = recipee,
        user_name = user_name,
        featured_image = featured_image

    )
        # Add selected categories to the Dish instance
    selected_categories = Category.objects.filter(id__in=selected_categories_ids)
    instance.category.add(*selected_categories)

    # Save the Dish instance
    instance.save()

    request_data = {
            "status_code" : 6000,
            "message" : "sucecss"
        }
    return Response (request_data)



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def mypost(request):

    instance = Dish.objects.filter(user_name = request.user, is_deleted = False)

    context = {
        "request" : request
    }
    serializer = RecipeeSerializer(instance,many=True,context = context)
    request_data = {
        "status_code" : 6000,
        "data" : serializer.data,
        "message" : "sucecss"
        }
    return Response (request_data)


    