# -*- coding: utf-8 -*-
# Copyright (c) 2018, KEA and contributors
# For license information, please see license.txt

from __future__ import unicode_literals



import frappe
import re
from frappe.model.document import Document
from frappe import utils
import datetime
from frappe.model.naming import make_autoname

# class InstructionEntity(Document):
# 	pass
from frappe.model.naming import make_autoname


class InstructionEntity(Document):
    pass

    def autoname(self):
        """
        Add autoname field for Instruction Entity

        it used to be : field:entity_name
        :return:
        naming_series
        entity_name
        """
        # self.name = self.naming_series + '-' + self.entity_name
        # self.name = make_autoname(self.entity_name + ' (ENT' + '/.#####')

        a_now = utils.nowdate()
        datee = datetime.datetime.strptime(a_now, "%Y-%m-%d")
        a_month = datee.month
        a_day = datee.day
        a_year = datee.year

        a = re.sub(r'\s+', '', self.entity_name.__str__().upper())
        a = re.sub(r'\s+', '', a)
        b = a[0:3]

        c = '%s - %s/%s%s' % (self.entity_name, b, a_month, a_year)
        # self.name = make_autoname(c + '/.#####')
        # self.name = make_autoname('.#####')
        d = make_autoname('.#####')

        self.internal_reference = '%s/%s' % (c, d)
        self.name = self.internal_reference



    def validate(self):
        if not self.internal_reference:
            self.internal_reference = self.name

