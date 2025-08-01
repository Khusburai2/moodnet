
    

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "tokens": {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh)
                },
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email
                }
            })
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

# views.py
# moods/views.py

from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from .models import MoodEntry
from .serializers import MoodEntrySerializer
from django.utils.timezone import now
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

class MoodEntryCreateView(generics.CreateAPIView):
    serializer_class = MoodEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class MoodEntryListView(generics.ListAPIView):
    serializer_class = MoodEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return MoodEntry.objects.filter(user=self.request.user).order_by('date')

class MoodReportPDFView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        mood_entries = MoodEntry.objects.filter(user=request.user).order_by('date')

        buffer = io.BytesIO()
        p = canvas.Canvas(buffer, pagesize=letter)
        width, height = letter

        p.setFont("Helvetica-Bold", 16)
        p.drawString(200, height - 40, f"{request.user.username}'s Mood Report")

        p.setFont("Helvetica", 12)
        y = height - 80
        for entry in mood_entries:
            line = f"Date: {entry.date} | Mood: {entry.mood} | Intensity: {entry.intensity}/10"
            p.drawString(50, y, line)
            y -= 20
            if entry.description:
                desc = f"Description: {entry.description}"
                p.drawString(70, y, desc)
                y -= 30
            if y < 50:
                p.showPage()
                y = height - 50

        p.showPage()
        p.save()

        buffer.seek(0)
        return HttpResponse(buffer, content_type='application/pdf')




# # posting/views.py
# from rest_framework import generics, permissions
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import Post, Comment
# from .serializers import PostSerializer, CommentSerializer
# from .permissions import IsOwnerOrReadOnly

# # List all posts, create post
# class PostListCreateView(generics.ListCreateAPIView):
#     queryset = Post.objects.all().order_by('-created_at')
#     serializer_class = PostSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

#     def get_serializer_context(self):
#         context = super().get_serializer_context()
#         context.update({"request": self.request})
#         return context

# # Retrieve, update, delete a post
# class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#     permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

#     def get_serializer_context(self):
#         context = super().get_serializer_context()
#         context.update({"request": self.request})
#         return context

# # Create a comment on a post
# # views.py

# from rest_framework import generics, permissions
# from rest_framework.exceptions import PermissionDenied
# from rest_framework.response import Response
# from rest_framework import status
# from django.shortcuts import get_object_or_404
# from .models import Post, Comment, Notification
# from .serializers import CommentSerializer

# class CommentCreateView(generics.CreateAPIView):
#     serializer_class = CommentSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def perform_create(self, serializer):
#         post_id = self.kwargs['post_id']
#         post = get_object_or_404(Post, id=post_id)

#         # ✅ Prevent commenting on own post
#         if post.user == self.request.user:
#             raise PermissionDenied("You cannot comment on your own post")

#         # ✅ Save comment
#         comment = serializer.save(user=self.request.user, post=post)

#         # ✅ Notify post owner
#         Notification.objects.create(
#             user=post.user,
#             post=post,
#             message=f"Someone commented on your post."
#         )


# from rest_framework import generics
# from .models import Notification
# from .serializers import NotificationSerializer
# from rest_framework.permissions import IsAuthenticated

# class NotificationListView(generics.ListAPIView):
#     serializer_class = NotificationSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return Notification.objects.filter(user=self.request.user).order_by('-created_at')


from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from .models import Post, Comment, Notification
from .serializers import PostSerializer, CommentSerializer, NotificationSerializer
from .permissions import IsOwnerOrReadOnly

class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_serializer_context(self):
        return {**super().get_serializer_context(), "request": self.request}

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get_serializer_context(self):
        return {**super().get_serializer_context(), "request": self.request}

class CommentCreateView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        post_id = self.kwargs['post_id']
        post = get_object_or_404(Post, id=post_id)

        if post.user == self.request.user:
            raise PermissionDenied("You cannot comment on your own post")

        comment = serializer.save(user=self.request.user, post=post)

        Notification.objects.create(
            user=post.user,
            post=post,
            message=f"{self.request.user.username} commented on your post."
        )

class NotificationListView(generics.ListAPIView):
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user).order_by('-created_at')
    

    
# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Notification

class MarkNotificationsReadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        Notification.objects.filter(user=request.user, is_read=False).update(is_read=True)
        return Response({"message": "Notifications marked as read."})
