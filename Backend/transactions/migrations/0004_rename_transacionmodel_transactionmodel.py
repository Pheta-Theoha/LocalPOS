# Generated by Django 5.0.6 on 2024-05-18 20:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
        ('transactions', '0003_alter_transacionmodel_products'),
        ('users', '0002_alter_usermodel_updatedat'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='TransacionModel',
            new_name='TransactionModel',
        ),
    ]
