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
    const from = data.from ? data.from : '';
    const details = data.details ? data.details : '';
    if (phone || from) {
        const mailOptions = {
            from,
            replyTo: from,
            to: Config.mail.mainRecipient,
            bcc: Config.mail.recipients.split(','),
            subject: `Заказ Игрушек: ${name}`,
            html: `<p>E-mail покупателя: <b><a href="mailto:${from}?subject=Funny Kid Club заказ">${from}</a></b></p>
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
