const nodemailer = require('nodemailer');

const sendContactUsEmail = async (name, email, contactNumber, message) => {
    const transpoter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.BUSINESS_EMAIL,
            pass: process.env.BUSINESS_PASSWORD,
        },
        secure: false,
        port: 25, 
        tls: {
            rejectUnauthorized: false
        },
    });

    const mailOptions = {
        from: `Zafron <${email}>`,
        to: process.env.BUSINESS_EMAIL,
        subject: 'Contact Us Form',
        text: `
            Name: ${name}
            Email: ${email}
            Contact Number: ${contactNumber}
            Message: ${message}
        `,
    };

    await transpoter.sendMail(mailOptions);
};

module.exports = sendContactUsEmail;
