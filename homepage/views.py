from django.shortcuts import render


# Create your views here.
def home_index(request):
    # return render(request, "index.html", {})
    return render(request, "homepage.html", {})
