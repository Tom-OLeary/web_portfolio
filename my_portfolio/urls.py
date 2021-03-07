"""my_portfolio URL Configuration
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("homepage.urls")),
    path("projects/", include("projects.urls")),
    path("blog/", include("blog.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path('api/', include('blog.api.urls')),
    path("resume/", include("resume.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)