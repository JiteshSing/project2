# Generated by Django 4.1 on 2024-10-07 15:41

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        (
            "service",
            "0028_rename_initialinvestmentlevel_portfoliomanagement_initialinvestmentamount",
        ),
    ]

    operations = [
        migrations.DeleteModel(
            name="PortfolioManagement",
        ),
    ]