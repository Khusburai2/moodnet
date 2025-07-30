
from django.urls import path
from .views import register_user, login_user, user_profile, logout_user, refresh_token

urlpatterns = [
    path('auth/register/', register_user, name="register"),
    path('auth/login/', login_user, name="login"),
    path('auth/logout/', logout_user, name="logout"),
    path('auth/profile/', user_profile, name="profile"),
    path('auth/refresh/', refresh_token, name="refresh_token"),
]
