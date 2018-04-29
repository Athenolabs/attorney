from frappe import _

def get_data():
	return {
		'heatmap': False,
		# 'heatmap_message': _('This is based on transactions against this Instruction. See timeline below for details'),
		# 'fieldname': 'customer',
        'fieldsname': 'project_ref',

        'internal_links': {
            # 'Purchase Order': ['items', 'purchase_order'],
            'Project': ['file_description', 'project_name' ],
            # 'Quality Inspection': ['items', 'qa_no'],
        },


		# 'transactions': [
		# 	{
		# 		'label': _('Support'),
		# 		'items': ['Issue']
		# 	},
		# 	{
		# 		'label': _('Support'),
		# 		'items': ['Forum locator']
		# 	},
		# 	{
		# 		'label': _('Project'),
		# 		'items': ['Project']
		# 	},
        #
        #
		# 	# {
		# 	# 	'label': _('Courts / Forums'),
		# 	# 	'items': ['Forum locator']
		# 	# },
		# 	# {
		# 	# 	'label': _('Projects'),
		# 	# 	'items': ['Project']
		# 	# }
		# ]
}

#
# def get_data():
#     return {
#         'fieldname': 'crono',
#         'transactions': [
#             {
#                 'label': _('Information'),
#                 'items': ['Technical data sheet', 'Sample identification']
#             },
#             {
#                 'label': _('Tests'),
#                 'items': ['Bunsen burner test', 'Ladder test', 'Smoke test', 'Accidity test']
#             },
#             {
#                 'label': _('Reports'),
#                 'items': ['Factory inspection', 'Classification', 'CoC']
#             }
#         ]
#     }