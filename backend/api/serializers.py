# from rest_framework import serializers
# from django.contrib.auth.models import User


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email']

from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
# serializers.py

from rest_framework import serializers
from .models import MoodEntry

class MoodEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodEntry
        fields = ['id', 'user', 'mood', 'intensity', 'description', 'date']
        read_only_fields = ['user']


# from rest_framework import serializers
# from .models import Post, Comment

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ['id', 'content', 'created_at']


# # Posting 


# class PostSerializer(serializers.ModelSerializer):
#     comments = CommentSerializer(many=True, read_only=True)
#     is_own = serializers.SerializerMethodField()

#     class Meta:
#         model = Post
#         fields = ['id', 'content', 'created_at', 'comments', 'is_own']

#     def get_is_own(self, obj):
#         request = self.context.get('request')
#         if request and hasattr(request, 'user'):
#             return obj.user == request.user
#         return False


# # in serializers.py
# from rest_framework import serializers
# from .models import Notification

# class NotificationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Notification
#         fields = '__all__'
# serializers.py (inside your posting app)

from api.models import Post, Comment, Notification

from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at', 'user', 'post']
        read_only_fields = ['user', 'post']

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    is_own = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'content', 'created_at', 'comments', 'is_own']

    def get_is_own(self, obj):
        request = self.context.get('request')
        return request and hasattr(request, 'user') and obj.user == request.user

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'