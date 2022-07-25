'use strict'

const formContainer = document.getElementById('form-path');
 
// -- Create form

const formAdd = document.createElement('div'); 
formAdd.classList = 'form-container '
formAdd.innerHTML=`
<form onsubmit="sendEmail(); reset(); return false;">
<h3 class="text-center">Get in touch</h3>
<input type="text" id="name" placeholder="Your Name" autocomplete="off" minlength ="3" maxlength="14" size="10" required>
<input type="email" id="email" placeholder="E-mail" autocomplete="off" minlength ="6" maxlength="26" required>
<input type="text" id="phone" placeholder="Phone Number" autocomplete="off" minlength ="10" maxlength="15" size="10" required>
<textarea spellcheck="false" title="message" id="message" autocomplete="off" rows="4" placeholder="Send message!"></textarea>
<button type="submit">Send Message !</button>
</form>`;
formContainer.appendChild(formAdd);
formPath.style.display = 'none';


// -- Function send e-mail

function sendEmail() {
    Email.send({
        Host:'smtp.elasticemail.com' ,
        Username:'osmanordu965@gmail.com',
        Password: '5E74C29FDBE96C74C701FD83BBB7774FD029',
        To : 'orduosman264@gmail.com', // E-mail address for message
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : 'Name: ' + document.getElementById('name').value +
        '<br> Email: ' + document.getElementById('email').value +
        '<br> Phone No: ' + document.getElementById('phone').value +
        '<br> Message : ' + document.getElementById('message').value 
    }).then(alert('mail başarıyla gönderildi')
    );
}