# -*- coding: utf-8 -*-
# Copyright (c) 2018, KEA and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

# class InstructionEntity(Document):
# 	pass


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
		self.name = self.naming_series + '-' + self.entity_name