require('dotenv').config();

global.Config = {
    env: process.env.NODE_ENV || 'development',
    server: {
        port: process.env.PORT || 3000,
        shutdownTimeout: 60e3
    },
    mail: {
        mainEmail: process.env.MAIN_EMAIL,
        mainPass: process.env.MAIN_PASS,
        mainRecipient: process.env.MAIN_RECIPIENT,
        recipients: process.env.RECIPIENTS
    }
};
