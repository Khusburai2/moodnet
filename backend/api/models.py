# moods/models.py

from django.db import models
from django.contrib.auth.models import User
# from .models import Post  # ✅ Correct cross-app import

class MoodEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mood_entries')
    mood = models.CharField(max_length=20)
    intensity = models.PositiveSmallIntegerField()
    description = models.TextField(blank=True)
    date = models.DateField(auto_now_add=True) 

    def __str__(self):
        return f'{self.user.username} - {self.mood} on {self.date}'

# posting/models.py


# from django.db import models
# from django.contrib.auth.models import User

# class Post(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Post {self.id} by {self.user.username}"

# class Comment(models.Model):
#     post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
#     user = models.ForeignKey(User, on_delete=models.CASCADE)  # commenter
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Comment {self.id} by {self.user.username} on Post {self.post.id}"



# # Notification
# class Notification(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notifications")
#     post = models.ForeignKey("api.Post", on_delete=models.CASCADE)  # ✅ Avoid circular import
#     message = models.CharField(max_length=255)
#     is_read = models.BooleanField(default=False)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.user.username} - {self.message}"


# ✅ Post model
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post {self.id} by {self.user.username}"

# ✅ Comment model
class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment {self.id} by {self.user.username} on Post {self.post.id}"

# ✅ Notification model
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notifications")
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    message = models.CharField(max_length=255)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.message}"