from django.urls import path

from .views import *

urlpatterns = [
	path("", render_app, name="app"),
]
