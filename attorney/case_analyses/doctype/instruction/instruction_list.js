
frappe.listview_settings['Instruction'] = {
    add_fields: ["project", "client", "file_description", "our_reference", "instruction_status", "date_instruction_accepted"],
    filters: [["instruction_status", "=", "Open"]],

    onload: function (me) { 
        frappe.route_options = {"instruction_status": "Open"}
    },

    get_indicator: function(doc) {
		if ((doc.instruction_status == "Open")) {
			return [__("Open"), "green"];
		}
		else if (doc.instruction_status == "Archived") {
			return [__("Archived"), "red"];
		}
		else {
			return [__("Pending Archiving"), "orange"];
		}
	}
};





// frappe.listview_settings['Fees'] = {
// 	add_fields: [ "total_amount", "paid_amount", "due_date"],
// 	get_indicator: function(doc) {
// 		if ((doc.total_amount > doc.paid_amount) && doc.due_date < get_today()) {
// 			return [__("Overdue"), "red", ["due_date,<,"+get_today()], ["due_date,<,"+get_today()]];
// 		}
// 		else if (doc.total_amount > doc.paid_amount) {
// 			return [__("Pending"), "orange"];
// 		}
// 		else {
// 			return [__("Paid"), "green"];
// 		}
// 	}
// };