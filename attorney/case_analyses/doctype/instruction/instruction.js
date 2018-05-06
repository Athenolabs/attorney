// Copyright (c) 2017, Kruger Engelbrecht and contributors
// For license information, please see license.txt --

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


frappe.ui.form.on("Instruction", "update", function (frm, cdt, cdn) {

    frm.refresh_field("client");
    frm.refresh_field("file_description");
    frm.refresh_field("our_reference");
    frm.refresh_field("date_instruction_accepted");
    frm.refresh_field("instruction_status");
    frm.refresh_field("date_of_prescription");
    frm.refresh_field("litigation_status");
    frm.refresh_field("we_act_for");
});


// project.customer
// project.project_name
// project.our_reference
// project.expected_start_date
// project.status
// project.prescription_date
// project.litigation_status
// project.litigation_status


// //Push Changes to a document from another document.
// //Replace "DocType" with the source DocType
// frappe.ui.form.on("DocType", {
//     //The trigger can be changed, but refresh must be used to use a button
//     refresh: function (frm) {
//         //The following line creates a button.
//         frm.add_custom_button(__("Update"),
//             //The function below is triggered when the button is pressed.
//             function () {
//                 frappe.call({
//                     "method": "frappe.client.set_value",
//                     "args": {
//                         //replace "Target DocType" with the actual target doctype
//                         "doctype": "Target DocType",
//                         //replace target_doctype_link with a link to the document to be changed
//                         "name": frm.doc.target_doctype_link,
//                         "fieldname": {
//                             //You can update as many fields as you want.
//                             "target_field_1": frm.doc.source_field_1,
//                             "target_field_2": frm.doc.source_field_2,
//                             "target_field_3": frm.doc.source_field_3,
//                             "target_field_4": frm.doc.source_field_4,
//                             "target_field_5": frm.doc.source_field_5  //Make sure that you do not put a comma over the last value
//                         },
//                     }
//                 });
//             });
//     }
// });
