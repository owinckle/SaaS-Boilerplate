# Django
from django.shortcuts import render
from django.contrib.auth import login as log
from django.contrib.auth import authenticate, logout

# DRF
from rest_framework.views import APIView
from utils.responses import success_request

# Models
from django.contrib.auth.models import User

# Utils
from .settings import Settings, Locale
from .validators import validate_password


def login(request):
	"""
	Verify if the user is logged in. 
	If true, redirect him, otherwise display the login page.
	"""
	settings = Settings()
	locale = Locale()

	ctx = {
		"light_theme": settings.LIGHT_THEME,
		"lang": locale.get_lang(request.LANGUAGE_CODE, settings.DEFAULT_LANG)
	}

	return render(request, "authentication/login.html", ctx)


def register(request):
	"""
	Verify if the user is logged in. 
	If true, redirect him, otherwise display the register page.
	"""
	settings = Settings()
	locale = Locale()

	ctx = {
		"light_theme": settings.LIGHT_THEME,
		"lang": locale.get_lang(request.LANGUAGE_CODE, settings.DEFAULT_LANG)
	}

	return render(request, "authentication/register.html", ctx)


class Authenticate(APIView):
	"""
	Given an email and password, authenticate the user
	"""
	def post(self, request, format=None):
		email = request.data.get("email")
		password = request.data.get("password")

		# Verify the fields
		if not email or not password:
			error = {
				"type": "empty_fields",
				"email": True if not email else False,
				"password": True if not password else False
			}
			return success_request({"error": error})

		# Verify if the email is associated to an account
		user = User.objects.filter(email=email).first()
		if user is None:
			return success_request({"error": {"type": "credentials"}})
		
		# Attempt to log the user in
		user = authenticate(request, username=user.username, password=password)
		if user is not None:
			log(request, user)
			return success_request()
		else:
			return success_request({"error": {"type": "credentials"}})


class CreateAccount(APIView):
	"""
	Given a username, email and password, create a new account
	"""
	def post(self, request, format=None):
		username = request.data.get("username")
		email = request.data.get("email")
		password = request.data.get("password")

		# Verify the fields
		if not username or not email or not password:
			error = {
				"type": "empty_fields",
				"username": True if not username else False,
				"email": True if not email else False,
				"password": True if not password else False
			}
			return success_request({"error": error})

		# Verify if the email is already associated to an account
		email_exists = User.objects.filter(email=email).first()
		username_exists = User.objects.filter(username=username).first()

		if username_exists != None or email_exists != None:
			error = {
				"type": "already_exists",
				"email": True if email_exists != None else False,
				"username": True if username_exists != None else False
			}
			return success_request({"error": error})

		# Verify if the password is valid
		if not validate_password(password):
			return success_request({"error": {"type": "invalid_password"}})

		# Create the new user
		new_user = User(username=username, email=email)
		new_user.set_password(password)
		new_user.save()

		# Send a verification email
		return success_request()
		