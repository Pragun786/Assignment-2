$(document).ready(function() {
        $("#contactForm").submit(function(event) {
            event.preventDefault(); 

            $(".error").text('');
            
            let isValid = true;
            //This is for name validation
            if ($("#name").val().trim() === "") {
                $("#nameError").text("Please enter your name.");
                isValid = false;
            }
            //for email validation
            const email = $("#email").val().trim();
            if (email === "") {
                $("#emailError").text("Please enter your email.");
                isValid = false;
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    $("#emailError").text("Enter a valid email address.");
                    isValid = false;
                }
            }
            //for message validation 
            if ($("#message").val().trim() === "") {
                $("#messageError").text("Please enter your message.");
                isValid = false;
            }

            if (isValid) {
                alert("Thank you for contacting us!");
                $("#contactForm")[0].reset(); 
            }
        });
    });