var msg1 = "Your e-mail address is missing!";
var msg2 = "Entered e-mail address is not valid!";

$(".submit")
    .click(function (event) {
        var email = $("#newsletter-form-email").val();
        var infofield = $(".field-validation-valid")[0];
        infofield.style.display = "block";
        if (email == "") {
            infofield.innerHTML = msg1;
            event.preventDefault();
            return;
        }
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!email.match(re)) {
            infofield.innerHTML = msg2;
            event.preventDefault();
            return;
        }
        infofield.innerHTML = "You have been succesfully registered!";
    });