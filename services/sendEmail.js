const nodemailer = require('nodemailer');

const sendEmail = async (fullName, userEmail, phoneNumber, resume, fileName) => {
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
        from: `Zafron <${userEmail}>`,
        to: process.env.BUSINESS_EMAIL,
        subject: 'New job application',
        text: `
            Full Name: ${fullName}
            Email: ${userEmail}
            Phone Number: ${phoneNumber}
        `,
        attachments: [
            {
              filename: fileName,
              content: resume,
            },
        ],
    };

    await transpoter.sendMail(mailOptions);
};

module.exports = sendEmail;
