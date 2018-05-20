from django.urls import path
from .views import index, about_us, contact, services

urlpatterns = [
    path('', index),
    path('about-us/', about_us),
    path('contact/',  contact),
    path('services/',  services),
]
