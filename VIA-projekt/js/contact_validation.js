var msg_required = "This field is required!";
var msg_email_invalid_type = "Entered e-mail address is not valid!";
var msg_phone_invalid = "Entered phone number has invalid format (invalid character or length (min. 6))!";
var msg_url_invalid = "Web URL is invalid!";

function displayMsg(msg, element) {
    var block = element.parentElement.parentElement;
    var msg_field = document.createElement("span");
    msg_field.className = "field-validation-error";
    msg_field.innerHTML = msg;
    block.children[2].appendChild(msg_field);
}

function displayOk(element) {
    var block = element.parentElement.parentElement;
    var msg_field = document.createElement("span");
    msg_field.className = "field-validation-valid";
    var ok = document.createElement("i");
    ok.className = "fa fa-check";
    msg_field.appendChild(ok);
    block.children[2].appendChild(msg_field);
}

$(".form-submit")
    .click(function (event) {
        event.preventDefault();

        //CLEAN MSGS
        $(".form tr")
            .each(function (index, element) {
                var child = element.children[2];
                if (typeof child !== "undefined") {
                    child.innerHTML = "";
                }
            });
                     
        //REQUIRED VALIDATION
        var r_found = false;
        var required = $("input[required]")
                            .each(function (index, element) {
                                if (element.value == "") {
                                    displayMsg(msg_required, element);
                                    r_found = true;
                                }
                            });
        
        if (r_found) {
            return;
        }

        displayOk($("#form-field-name")[0]);

        //EMAIL VALIDATION
        var email_element = $("#form-field-email")[0];
        var email = email_element.value;

        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!email.match(re)) {
            displayMsg(msg_email_invalid_type, email_element);
            return;
        }

        displayOk(email_element);

        //PHONE VALIDATION
        var phone_element = $("#form-field-phone-number")[0];
        if (phone_element.value != "") {
            var re = /(^\+)?(?:[0-9] ?){6,14}[0-9]$/;
            if (!phone_element.value.match(re)) {
                displayMsg(msg_phone_invalid, phone_element);
                return;
            }
        }
        displayOk(phone_element);

        //URL VALIDATION
        var url_el = $("#form-field-web")[0];
        if (url_el.value != "") {
            var re = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            if (!url_el.value.match(re)) {
                displayMsg(msg_url_invalid, url_el);
                return;
            }
        }
        displayOk(url_el);
    });