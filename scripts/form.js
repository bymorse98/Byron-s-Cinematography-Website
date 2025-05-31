function emailSend() {
    
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var messageBody = "Name" + userName +
    "<br/> Email " + email + 
    "<br/> Message " + message;

    //var now =  new Date();
    //var currentDateTime = now.toLocaleString();
    
    emailjs.send({
    Host : "s1.maildns.net",
    Username : "byronamorse@gmail.com",
    Password : "9D996408F5F7D885E93981F1DAC1113DCD18",
    To : 'byronamorse@gmail.com',
    From : "byronamorse@gmail.com",
    Subject : "Form Data Submitted — Form #"/* + currentDateTime*/,
    Body : messageBody
}).then(
  message => alert("Form Submitted Successfully")
);
};