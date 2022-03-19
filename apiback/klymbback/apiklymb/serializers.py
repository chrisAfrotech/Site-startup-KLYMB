from rest_framework import serializers
from apiklymb import models

# Create your views here.


class ContactSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.ContactModel
		fields = ("email", "requete")

