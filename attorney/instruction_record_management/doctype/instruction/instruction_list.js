
frappe.listview_settings['Instruction'] = {
    add_fields: ["client", "file_description", "our_reference", "instruction_status", "date_instruction_accepted"],
    filters: [["instruction_status", "=", "Open"]],

    onload: function (me) {
        frappe.route_options = {"instruction_status": "Open"}
    }
};