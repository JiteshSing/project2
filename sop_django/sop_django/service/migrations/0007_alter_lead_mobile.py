# Generated by Django 4.1 on 2024-08-13 10:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("service", "0006_rename_date_lead_date"),
    ]

    operations = [
        migrations.AlterField(
            model_name="lead",
            name="mobile",
            field=models.BigIntegerField(default=0),
        ),
    ]