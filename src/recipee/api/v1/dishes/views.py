
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from dishes.models import Dish
from api.v1.dishes.serializers import DishesSerializer,RecipeeSerializer


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
        instance = Dish.objects.filter(pk=id)

        context = {
        "request" : request
        }
        serializer = RecipeeSerializer(instance, many= True,context = context)
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