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

// // This works but not for "reference_name"
// frappe.ui.form.on("ToDo", "description", function (frm, cdt, cdn) {
//     d = locals[cdt][cdn];
//     d.description = 'Hallo World';
//     d.reference_type = "Instruction";
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


