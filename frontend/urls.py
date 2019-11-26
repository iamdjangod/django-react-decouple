from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('entry', views.entry, name='entry'),
    path('csv/upload', views.csv_uploader, name='csv_uploader')
]