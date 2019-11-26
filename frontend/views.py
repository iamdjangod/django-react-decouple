import csv, io
from django.shortcuts import render
from django.contrib import messages

from entries.models import Entry

# Create your views here.


def index(request):
    return render(request, 'frontend/index.html')


def entry(request):
    return render(request, 'frontend/entry.html')


def csv_uploader(request):
    # declaring template
    template = "frontend/csv_uploader.html"
    data = Entry.objects.all()
    prompt = {
        'order': 'Order of the CSV should be name, email, address,    phone, profile',
        'entries': data
    }
    # GET request returns the value of the data with the specified key.
    if request.method == "GET":
        return render(request, template, prompt)
    csv_file = request.FILES['file']  # let's check if it is a csv file
    if not csv_file.name.endswith('.csv'):
        messages.error(request, 'THIS IS NOT A CSV FILE')
        data_set = csv_file.read().decode('UTF-8')
        io_string = io.StringIO(data_set)
        next(io_string)
    return render(request, template)