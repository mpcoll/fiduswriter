# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-03 22:56
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('document', '0012_exporttemplate'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='exporttemplate',
            unique_together=set([('file_name', 'file_type')]),
        ),
    ]
