from django.contrib import admin
from .models import Article
# Register your models here.
# admin.site.register(Article)

@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_display = ['id','title','description'] # this will display the fields in the admin page
    list_filter = ['id','title','description'] # this will filter the fields in the admin page
    class Meta:
        model = Article