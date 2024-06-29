from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from .schemas import TaggedSwaggerAutoSchema

schema_view = get_schema_view(
    openapi.Info(
        title="LocalPOS API",
        default_version='v1',
        description="OpenAPI decumentation for the LocalPOS Project"
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
    # generator_class=TaggedSwaggerAutoSchema  # Use the custom schema class
)

urlpatterns = [
    path('admin/', admin.site.urls),
    # For testing
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/users/', include('users.urls')),
    path('api/transactions/', include('transactions.urls')),
    path('api/products/', include('products.urls')),
    path('api/login/', include('users.login-urls')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
