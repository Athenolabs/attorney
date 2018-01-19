# -*- coding: utf-8 -*-
# Copyright (c) 2017, Kruger Engelbrecht and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import throw, _
from frappe.utils import cstr
from erpnext.accounts.party import validate_party_accounts
from frappe.contacts.address_and_contact import load_address_and_contact, delete_contact_and_address


class InstructionEntity(Document):
    pass
