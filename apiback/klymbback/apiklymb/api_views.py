from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import CreateModelMixin	

# Create your views here.

from apiklymb import models
from apiklymb import serializers

class ContactViewSet(CreateModelMixin ,GenericViewSet):

	serializer_class = serializers.ContactSerializer
	queryset = models.ContactModel.objects.all()

