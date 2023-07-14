from django.db import models

# Create your models here.
class Article(models.Model):
    title= models.CharField(max_length=100)
    description= models.CharField(max_length=100)
  
    def __str__(self):
        return self.title
# there are different types of serializers
# hyperlinkedModelSerializer, ModelSerializer, Serializer