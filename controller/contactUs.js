const sendContactUsEmail = require('../services/sendContactusEmail');

const contactUs = async (req, res) => {
    const { name, email, contactNumber, message } = req.body;

    sendContactUsEmail(name, email, contactNumber, message);

    return res
        .status(200)
        .json({
            message: 'Success',
        });
};

module.exports = contactUs;
