# Generated by Django 4.1 on 2024-09-02 09:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("service", "0011_alter_issue_table"),
    ]

    operations = [
        migrations.CreateModel(
            name="Owner",
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
                ("name", models.CharField(max_length=50)),
                ("dob", models.DateField(max_length=20)),
                ("vehicleId", models.IntegerField(default=0)),
                ("insuranceAmount", models.IntegerField(default=0)),
                ("did", models.IntegerField(default=0)),
                ("vid", models.IntegerField(default=0)),
            ],
            options={
                "db_table": "SOS_OWNER",
            },
        ),
    ]
