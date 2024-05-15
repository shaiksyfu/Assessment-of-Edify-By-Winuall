INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'todo', 
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mydb',
        'USER': 'myuser',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}

from django.db import models

class ToDo(models.Model):
    task = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)

from rest_framework import serializers
from .models import ToDo

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ('id', 'task', 'completed')

from rest_framework import generics
from .models import ToDo
from .serializers import ToDoSerializer

class ToDoListCreateView(generics.ListCreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

class ToDoUpdateView(generics.RetrieveUpdateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    partial = True

class ToDoDeleteView(generics.DestroyAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response({"message": "Todo deleted"})


from django.urls import path
from . import views

urlpatterns = [
    path('', views.ToDoListCreateView.as_view()),
    path('<int:pk>/', views.ToDoUpdateView.as_view()),
    path('delete/<int:pk>/', views.ToDoDeleteView.as_view()),
]


from django.urls import path, include

urlpatterns = [
    path('api/v1/todo/', include('todo.urls')),
    path('admin/', admin.site.urls),
]