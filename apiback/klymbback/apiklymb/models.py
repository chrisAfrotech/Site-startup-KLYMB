from django.db import models

# Create your models here.


class ContactModel(models.Model):

	email = models.EmailField()
	requete = models.TextField()

	def __str__(self):
		return self.email


