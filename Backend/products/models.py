from django.db import models
import uuid

class ProductModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50, unique=True, null=False)
    price = models.IntegerField(null=False)
    quantity = models.IntegerField(null=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'products'
        ordering = ['-createdAt']

    def __str__(self) -> str:
        return self.name