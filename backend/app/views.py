from django.shortcuts import render

def render_app(request):
	return render(request, "app/app.html")