from django.shortcuts import render
from rest_framework import viewsets
from .models import TransactionModel
from .serializers import TransactionSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = TransactionModel.objects.all()
    serializer_class = TransactionSerializer