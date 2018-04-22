// Copyright (c) 2017, Kruger Engelbrecht and contributors
// For license information, please see license.txt

frappe.ui.form.on('Instruction', {
    refresh: function (frm) {
        if (frm.doc.project) {
            // cur_frm.add_custom_button(_('button1'), function()
            frm.add_custom_button(__(frm.doc.project), function () {
                frappe.set_route("Form", "Project", frm.doc.project);
            });

        }

    }


});


// This line points to the Sales Invoice Item DocType, meaning that anytime a Sales Invoice Item DocType is loaded, this script will run
frappe.ui.form.on("Instruction", {
			// Set the trigger to run the function, which will run in the current form (frm)
      // The trigger is the "item_code" field within the "Sales Invoice Item" DocType, when it is updated, execute the function
			"description": function(frm) {
      //Using the item_code field, get the corresponding value of the "brand" field (From Item DocType, gets the brand matching that item code)
      //Then set the value of the target field "brand" in Sales Invoice Item to that value.
      //frm.add_fetch("[LINK FIELD]", "[CORRESPONDING SOURCE FIELD]", "[TARGET FIELD]")
			frm.add_fetch("todo", "name", "reference_name");
      }
});








//
//
// // This works but not for "reference_name"
// frappe.ui.form.on("ToDo", "description", function (frm, cdt, cdn) {
//     d = locals[cdt][cdn];
//     d.description = 'Hallo World';
//     d.reference_type = "Instruction";
//
//     // LINKFIELD --
//     // CORRESPONDING SOURCE FIELD --
//     // TARGET FIELD --
//     // frm.add_fetch("", "", "")
//     d.reference_name = frm.add_fetch("parent", "name", "reference_name")
// });








    // LINKFIELD --
    // CORRESPONDING SOURCE FIELD --
    // TARGET FIELD --
    // frm.add_fetch("", "", "")
    // d.reference_name = .name


