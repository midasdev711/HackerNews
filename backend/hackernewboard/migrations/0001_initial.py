# Generated by Django 2.2.2 on 2019-06-22 05:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hackernewboard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('by', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('url', models.TextField()),
                ('score', models.IntegerField()),
            ],
        ),
    ]
