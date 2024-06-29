# from argparse import Action
# from django.contrib.auth.models import User
# from rest_framework.decorators import action
# from rest_framework.response import Response
# from rest_framework.exceptions import NotFound
from django.shortcuts import render
from rest_framework import viewsets
from .models import UserModel
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# # For testing
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.authentication import JWTAuthentication

# # Also for testing
# class Home(APIView):
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         content = {'message': 'Hello, World!'}
#         return Response(content)

class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

class UserVerification(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user = UserModel.objects.get(username=username, password=password)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except UserModel.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# class LoginViewSet(viewsets.ModelViewSet):
#     queryset = UserModel.objects.all()
#     serializer_class = UserSerializer

# class UserLoginViewSet(viewsets.ModelViewSet):
#     queryset = UserModel.objects.all()
#     serializer_class = UserSerializer

# @action(detail=False, methods=['get'], url_path='by-username/(?P<username>[^/.]+)')
# def get_by_username(self, request, username=None):
#     try:
#         user = User.objects.get(username=username)
#     except User.DoesNotExist:
#         raise NotFound(detail="User not found", code=404)
#     serializer = self.get_serializer(user)
#     return Response(serializer.data)