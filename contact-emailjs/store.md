1. open emailjs.com and create a new account

2. create a new service and connect to your email account


3. change template to your own template

err => {
                console.error('Email sending failed:', err); // Log any error to the console
                alert("Email sending failed. Check the console for error details.");
            }

4. mistake: 

make sure template name is the same as the one you created in emailjs.com
I create reply-to in emailjs.com but I use replyto in the code
make sure ID, USER_ID, TEMPLATE_ID are correct

5. Expalination
to email is your email
replyto email is visitor's email 










