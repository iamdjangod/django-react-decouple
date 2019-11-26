from django.urls import path
from . import views

urlpatterns = [
    path('api/entry/', views.EntryListCreate.as_view()),
]
