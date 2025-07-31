$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    });
});

function ajaxPost() {
    var formData = {
        email: $("#email").val(),
        password: $("#password").val()
    };
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/dataform",
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function(response) {
            const errormsg = $("#errormsg");
            if (response.valid == true) {
                errormsg
                .removeClass("hidemessage error")
                .addClass("showmessage success")
                .text("Login successful for " + response.email);
                console.log("Login successful");
            } else {
                errormsg
                .removeClass("hidemessage success")
                .addClass("showmessage error")
                .text("User credentials do not match");
                console.log("Login failed");
            }
        },
        error : function(e) {
            alert("Error!")
            console.log("Error: " + e);
        }
    });

}