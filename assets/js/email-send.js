/* description: send email to concat*/
/* @param concat form : object*/
/* return: boolean -*/

function sendMail(contactForm) {
    emailjs.send("default_service", "travel", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "packet_information": contactForm.packetinformation.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}



