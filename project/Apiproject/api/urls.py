
from django.urls import path
# from api.views import Index --->1
from .views import Index

urlpatterns = [
   
    # path('', Index), -->1
    path('', Index),
]
