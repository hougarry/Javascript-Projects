1. open smtpjs.com

use manage smtp  to create a new smtp account
            
          
            Email.send({
                Host : "smtp.gmail.com",
                Username : "hougarry@gmail.com",
                Password : "5ADE1700702CFE7D0F6C76130AEC8DD4B3EF",
                To : 'hougarry@gmail.com',
                From : document.getElementById("email").value,
                Subject : "New Contact Form Enqury",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );

2. Encrypt your smtp password by the website offered and copy the encrypted password

752e79f8-efdb-41e2-9015-4d3818098d74 
a6d99a40-4335-484a-a334-9f170efef408


<body>
    <div class="container">
        <form method="post">
            <h3>Contact with Me</h3>
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <input type="text" id="subject" placeholder="Your subject" required>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Leave your message here" required></textarea>
            <button type="submit" id="btn">Submit</button>
        </form>
    </div>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        var btn = document.getElementById('btn');
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;
            var body = 'name: ' + name + '<br/>email: ' + email + '<br/>subject: ' + subject + '<br/>message: ' + message;
                    Email.send({
                        SecureToken : "29bb0c1c-03f1-429a-a3ad-b9acdcb4e806",
                        To : 'garyofhou@gmail.com',
                        From : "hougarry@gmail.com",
                        Subject : "Cotact message",
                        Body : body
                    }).then(
                    message => alert(message)
                    );
        })
    </script>
</body>













