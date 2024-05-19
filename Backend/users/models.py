from django.db import models
import uuid

roles = [('cashier', 'Cashier'), ('supervisor', 'Supervisor'), ('admin', 'Admin')]

class UserModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fullName = models.CharField(max_length=100, null=False)
    username = models.CharField(max_length=50, unique=True, null=False)
    role = models.CharField(max_length=20, choices=roles)
    password = models.CharField(max_length=50, null=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users'
        ordering = ['-createdAt']
    
    def __str__(self) -> str:
        return self.fullName
