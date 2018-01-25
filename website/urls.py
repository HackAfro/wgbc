from django.urls import path
from .views import index, about_us, contact, ministries

urlpatterns = [
    path('', index),
    path('about-us/', about_us),
    path('contact/',  contact),
    path('ministries/',  ministries),
]