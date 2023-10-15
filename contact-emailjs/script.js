<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
// Initialize emailjs outside of the sendMail function
emailjs.init("yuCcGjmpcWOZcdfxJ"); // Use your actual public key
    
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing default form submission
    sendMail();
});

function sendMail(){
    var params = {
        sendername: document.querySelector("#sendername").value,
        to: document.querySelector("#to").value,
        subject: document.querySelector("#subject").value,
        replyto: document.querySelector("#replyto").value,
        message: document.querySelector("#message").value,
    };

    var serviceID = "service_qloxods"; // Your Service ID
    var templateID = "template_zoke8au"; // Your Template ID

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Email successfully sent!")
    })
    .catch(err => {
        console.error("Error sending email: ", err);
        alert("Failed to send email. Please try again later.");
    });
}
