const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nihal200424@gmail.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nihal200424@gmail.com',
        subject: `See you soon, ${name}!`,
        text: `We're sorry to see you go! Let us know if there is anything we could have done better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}