# Django
from django.shortcuts import render

# Utils
from .settings import Settings, Locale

def home(request):
	settings = Settings()

	ctx = {
		"settings": settings
	}

	return render(request, "pages/home.html", ctx)