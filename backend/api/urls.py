
# from django.urls import path
# from .views import register_user, login_user, user_profile, logout_user, refresh_token

# urlpatterns = [
#     path('auth/register/', register_user, name="register"),
#     path('auth/login/', login_user, name="login"),
#     path('auth/logout/', logout_user, name="logout"),
#     path('auth/profile/', user_profile, name="profile"),
#     path('auth/refresh/', refresh_token, name="refresh_token"),
# ]


from django.urls import path
from .views import RegisterView, LoginView, MoodEntryCreateView, MoodEntryListView, MoodReportPDFView,PostListCreateView, CommentCreateView,PostDetailView,NotificationListView,MarkNotificationsReadView

urlpatterns = [
    path('auth/register/', RegisterView.as_view()),
    path('auth/login/', LoginView.as_view()),
    path('entries/', MoodEntryListView.as_view(), name='mood-entry-list'),
    path('entries/create/', MoodEntryCreateView.as_view(), name='mood-entry-create'),
    path('report/pdf/', MoodReportPDFView.as_view(), name='mood-report-pdf'),
  path('posts/', PostListCreateView.as_view(), name='posts-list-create'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('posts/<int:post_id>/comments/', CommentCreateView.as_view(), name='post-comments-create'),
    path('notifications/', NotificationListView.as_view(), name='notifications'),
    path('notifications/mark-read/', MarkNotificationsReadView.as_view(), name='mark-notifications-read'),

]
