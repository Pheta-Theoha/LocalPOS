from django.urls import path, include
from rest_framework import routers
from .views import UserVerification

router = routers.DefaultRouter()
router.register(r'', UserVerification, basename='user')
# router.register(r'', get_by_username, basename='login')

urlpatterns = [
    path('', include(router.urls)),
    # path('<str:username>', include(router.urls))
]