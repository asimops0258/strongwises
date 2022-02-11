const nodemailer = require("nodemailer");

module.exports = () => {
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV === 'development' && !process.env.MAIL_HOST) {
            nodemailer.createTestAccount().then(mailAccount => {
                let transporter = nodemailer.createTransport({
                    host: mailAccount.smtp.host,
                    port: mailAccount.smtp.port,
                    secure: mailAccount.smtp.secure,
                    auth: {
                        user: mailAccount.user,
                        pass: mailAccount.pass
                    }
                })
                console.log('Create test mail account ' + mailAccount.web)
                console.log('Mail host: ' + mailAccount.smtp.host)
                console.log('Mail address: ' + mailAccount.user)
                console.log('Mail password: ' + mailAccount.pass)
                transporter.verify().then(() => {
                    console.log('Mail Enable')
                    resolve(transporter)
                }).catch(error => {
                    console.log(error)
                    console.log('Mail Diasble')
                    reject('MAIL_ERROR')
                })
            })
        } else if (process.env.MAIL_HOST && process.env.MAIL_ADDRESS && process.env.MAIL_PASSWORD) {
            let transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT || 587,
                secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
                auth: {
                    user: process.env.MAIL_ADDRESS, // generated ethereal user
                    pass: process.env.MAIL_PASSWORD, // generated ethereal password
                }
            });
            transporter.verify().then(() => {
                console.log('Mail Enable')
                resolve(transporter)
            }).catch(error => {
                console.log(error)
                console.log('Mail Diasble')
                reject('MAIL_ERROR')
            })
        } else {
            console.log('Mail Diasble')
            reject('MAIL_DISABLE')
        }
    })
};