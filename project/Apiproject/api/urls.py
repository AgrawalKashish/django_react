
from django.urls import path
# from api.views import Index --->1
# from .views import article_list, article_details
from .views import ArticleList, ArticleDetails
urlpatterns = [
   
    # path('', Index), -->1
    # path('articles/', article_list),
    # path('articles/<int:pk>', article_details),
    path('articles/', ArticleList.as_view()),
    path('articles/<int:id>/', ArticleDetails.as_view()),
    
]
