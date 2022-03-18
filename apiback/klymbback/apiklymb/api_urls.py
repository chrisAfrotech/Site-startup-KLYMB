from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter
from apiklymb import api_views


router = DefaultRouter()
router.register("ContactKlymb", api_views.ContactViewSet, basename="ContactKlymb")

urlpatterns = []
urlpatterns += router.urls


