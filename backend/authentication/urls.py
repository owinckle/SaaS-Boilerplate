from django.urls import path

from .views import *

urlpatterns = [
	path("login/", login, name="auth-login"),
	path("register/", register, name="auth-register"),
	path("authenticate/", Authenticate.as_view(), name="auth-authenticate"),
	path("create-account/", CreateAccount.as_view(), name="auth-create-account")
]
