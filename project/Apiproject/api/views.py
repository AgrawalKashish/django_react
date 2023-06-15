from django.shortcuts import render, HttpResponse
from .models import Article
from .serializer import ArticleSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework import generics
from rest_framework import mixins
# Create your views here.


# function based views
# @api_view(['GET', 'POST'])
# def article_list(request):
    
#     #get all the articles
#     if request.method== 'GET':
#         articles = Article.objects.all()
#         serializer = ArticleSerializer(articles, many=True)
#         return Response(serializer.data)
#     elif request.method== 'POST':
#         serializer = ArticleSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status= status.HTTP_201_CREATED)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
#normal views
# def article_list(request):
    
#     #get all the articles
#     if request.method== 'GET':
#         articles = Article.objects.all()
#         serializer = ArticleSerializer(articles, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     elif request.method== 'POST':
#         data = JSONParser().parse(request)
#         serializer = ArticleSerializer(data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)


#class based views
# class ArticleList(APIView):
#     def get(self, request):
#         articles = Article.objects.all()
#         serializer = ArticleSerializer(articles, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):
#          serializer = ArticleSerializer(data=request.data)
#          if serializer.is_valid():
#              serializer.save()
#              return Response(serializer.data, status= status.HTTP_201_CREATED)
#          return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
          
#mixins
class ArticleList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset =Article.objects.all()
    serializer_class = ArticleSerializer
    
    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)

# function based views
# @api_view(['GET', 'PUT', 'DELETE'])
# def article_details(request, pk):
#     try:
#         article = Article.objects.get(pk=pk)
#     except Article.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     if request.method == 'GET':
#         serializer = ArticleSerializer(article)
#         return Response(serializer.data)
    
#     elif request.method == 'PUT':
#         serializer = ArticleSerializer(article, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         article.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
      
#normal views
# def article_details(request, pk):
#     try:
#         article = Article.objects.get(pk=pk)
#     except Article.DoesNotExist:
#         return HttpResponse(status=404)
    
#     if request.method == 'GET':
#         serializer = ArticleSerializer(article)
#         return JsonResponse(serializer.data)
    
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = ArticleSerializer(article, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
    
#     elif request.method == 'DELETE':
#         article.delete()
#         return HttpResponse(status=204)

#class based views
# class ArticleDetails(APIView):
#     def get_object(self, id):
#          try:
#             return Article.objects.get(id=id)
#          except Article.DoesNotExist:
#             return HttpResponse(status=status.HTTP_404_NOT_FOUND)
#     def get(self, request, id):
#         article = self.get_object(id)
#         serializer = ArticleSerializer(article)
#         return Response(serializer.data)
#     def put(self, request,id):
#          article = self.get_object(id)
#          serializer = ArticleSerializer(article, data=request.data)
#          if serializer.is_valid():
#              serializer.save()
#              return Response(serializer.data, status=status.HTTP_201_CREATED)
#          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     def delete(self, request, id):
#           article = self.get_object(id)
#           article.delete()
#           return Response(status=status.HTTP_204_NO_CONTENT)
      
#mixins
class ArticleDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset =Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'
    def get(self, request, id):
        return self.retrieve(request, id=id)
    
    def put(self, request, id):
        return self.update(request, id=id)
    def delete(self, request, id):
        return self.destroy(request, id=id)