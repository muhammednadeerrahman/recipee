from django.urls import path
from api.v1.auth import views



urlpatterns = [
    path('', views.create),


] 
