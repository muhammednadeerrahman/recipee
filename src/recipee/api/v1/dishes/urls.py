from django.urls import path
from api.v1.dishes import views



urlpatterns = [
    path('', views.dishes),

] 
