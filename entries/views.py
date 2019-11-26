from .models import Entry
from .serializers import EntrySerializer
from rest_framework import generics


class EntryListCreate(generics.ListCreateAPIView):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
