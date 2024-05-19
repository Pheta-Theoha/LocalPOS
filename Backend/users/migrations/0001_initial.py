# Generated by Django 5.0.6 on 2024-05-18 16:47

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('fullName', models.CharField(max_length=100)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('role', models.CharField(choices=[('cashier', 'Cashier'), ('supervisor', 'Supervisor'), ('admin', 'Admin')], max_length=20)),
                ('password', models.CharField(max_length=50)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'users',
                'ordering': ['createdAt'],
            },
        ),
    ]