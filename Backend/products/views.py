from django.shortcuts import render
from rest_framework import viewsets
from .models import ProductModel
from .serializers import ProductSerializer
from drf_yasg.utils import swagger_auto_schema

# @swagger_auto_schema(tags=['Products'])
class ProductViewSet(viewsets.ModelViewSet):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
