# Generated by Django 5.0.7 on 2024-08-20 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_task'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]
