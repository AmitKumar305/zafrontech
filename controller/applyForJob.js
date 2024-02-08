const JobModel = require('../models/job.models.js');
const sendEmail = require('../services/sendEmail.js');

const applyForJob = async (req, res) => {
    const { jobId, fullName, email, phoneNumber } = JSON.parse(req.body.data);

    const job = await JobModel.findOne({
        _id: jobId,
    });

    if (!job) {
        res.json({
            message: 'No job found',
        });
    }

    sendEmail(job.title, fullName, email, phoneNumber, req.files.resume.data, req.files.resume.name);

    return res
        .status(200)
        .json({
            message: 'Applied for job successfully',
        });
};

module.exports = applyForJob;
