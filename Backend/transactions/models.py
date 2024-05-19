from django.db import models
import uuid
from users.models import UserModel
from products.models import ProductModel

class TransactionModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    user = models.ForeignKey(UserModel, on_delete=models.SET_NULL, null=True)
    products = models.ManyToManyField(ProductModel, related_name="products")
    total = models.IntegerField(null=False)
    change = models.IntegerField(null=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'transactions'
        ordering = ['-createdAt']

    def __str__(self) -> str:
        return self.id 