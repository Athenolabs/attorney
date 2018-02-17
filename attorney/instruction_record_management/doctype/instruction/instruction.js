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
