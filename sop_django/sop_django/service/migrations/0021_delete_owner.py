# Generated by Django 4.1 on 2024-09-09 07:16

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("service", "0020_task"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Owner",
        ),
    ]
