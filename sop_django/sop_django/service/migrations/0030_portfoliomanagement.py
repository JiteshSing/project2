# Generated by Django 4.1 on 2024-10-07 15:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("service", "0029_delete_portfoliomanagement"),
    ]

    operations = [
        migrations.CreateModel(
            name="Portfoliomanagement",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("portfolioName", models.CharField(max_length=50)),
                ("initialinvestmentAmount", models.BigIntegerField(default=0)),
                ("risktoleranceLevel", models.CharField(max_length=50)),
                ("investmentStrategy", models.CharField(max_length=250)),
                ("rid", models.IntegerField(default=0)),
            ],
            options={
                "db_table": "SOS_PORTFOLIOMANAGEMENT",
            },
        ),
    ]
