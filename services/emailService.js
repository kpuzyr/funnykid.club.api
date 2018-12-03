const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Config.mail.mainEmail,
        pass: Config.mail.mainPass
    }
});


function sendEmail(data) {
    let promise = Promise.resolve();
    const name = data.name ? data.name : '';
    const phone = data.phone ? data.phone : '';
    const email = data.email ? data.email : '';
    const details = data.details ? data.details : '';
    if (phone || email) {
        const mailOptions = {
            from: email,
            replyTo: email,
            to: Config.mail.mainRecipient,
            bcc: Config.mail.recipients.split(','),
            subject: `Заказ Игрушек: ${name}`,
            html: `<p>E-mail покупателя: <b><a href="mailto:${email}?subject=Funny Kid Club заказ">${email}</a></b></p>
                   <p>Номер телефона покупателя: <b>${phone}</b></p>
                   <p>Детали: ${details}</p>`
        };

        promise = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email sent: ${info.response}`);
            }
        });
    }

    return promise;
}

module.exports = {
    sendEmail
};
