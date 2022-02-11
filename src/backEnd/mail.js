const validator = require('validator');
const Transporter = require('./transporter.js');

var mailer;
Transporter().then(transporter => {
    mailer = transporter;
})

module.exports = (app) => {
    app.post('/mail', (req, res) => {
        const receiver = process.env.MAIL_RECEIVER || 'sales@strongwises.com';
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const check = [req.body.name, req.body.email, req.body.message];
        if (check.indexOf(undefined) != -1) {
            res.sendStatus(400);
            return;
        }
        if (!validator.isEmail(email)) {
            res.sendStatus(400);
            return;
        }
        mailer.sendMail({
            from: 'no-reply@strongwises.com',
            to: receiver,
            subject: "客戶留言",
            text: `FROM: ${name} ${email}\n` + message,
            html: `FROM: ${name} ${email}\n` + message
        }).then(() => {
            res.json({ "msg": 'SEND_SUCCESS' })
        })
    })
}