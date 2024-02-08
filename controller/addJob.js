const JobModel = require('../models/job.models.js');

const addJob = async (req, res) => {
    const { title, experience, location, jobDescription } = req.body;

    if (!title) {
        return res.status(400).json({
            message: 'Title is required',
        });
    }

    const job = new JobModel({
        title,
        experience,
        location,
        jobDescription,
    });
    await job.save();

    return res
        .status(200)
        .json({
            message: 'Job added successfully',
            data: job,
        });
};


module.exports = addJob;
