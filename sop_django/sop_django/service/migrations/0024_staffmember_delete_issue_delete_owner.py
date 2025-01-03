# Generated by Django 4.1 on 2024-09-12 09:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("service", "0023_contact"),
    ]

    operations = [
        migrations.CreateModel(
            name="Staffmember",
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
                ("fullName", models.CharField(max_length=50)),
                ("joiningDate", models.DateField(max_length=20)),
                ("division", models.CharField(max_length=50)),
                ("previousEmployer", models.CharField(max_length=50)),
                ("did", models.IntegerField(default=0)),
            ],
            options={
                "db_table": "SOS_STAFFMEMBER",
            },
        ),
        migrations.DeleteModel(
            name="Issue",
        ),
        migrations.DeleteModel(
            name="Owner",
        ),
    ]
