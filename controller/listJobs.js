const JobModel = require('../models/job.models.js');

const listJobs = async (req, res) => {
    const jobs = await JobModel.find().select('-__v');

    return res
        .status(200)
        .json({
            message: 'Jobs fetched successfully',
            data: jobs,
        });
};

module.exports = listJobs;
