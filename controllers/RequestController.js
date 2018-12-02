const { sendEmail } = require('../services/emailService');

module.exports = (app) => {
    app.post('/createRequest', async (req, res) => {
        try {
            await sendEmail(req.body);
            res.send('ok');
        } catch (err) {
            res.send(err);
        } finally {
            res.end();
        }
    });
};
