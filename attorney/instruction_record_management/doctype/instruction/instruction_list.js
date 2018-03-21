

frappe.listview_settings['Instruction'] = {
	add_fields: ["client", "file_description", "our_reference"],
	filters:[["instruction_status","=", "Open"]],

    onload: function(me) {
        frappe.route_options = {
            "instruction_status": "Open"
        };
    }
};




