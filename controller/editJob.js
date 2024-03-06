const JobModel = require('../models/job.models.js');

const editJob = async (req, res) => {
    const { jobId, title, experience, openings, location, workMode, package, jobDescription } = req.body;

    const job = await JobModel.findOne({
        _id: jobId,
    });

    if (!job) {
        return res.status(400).json({
            message: 'No job found',
        });
    }
    const updatedJob = await JobModel.findByIdAndUpdate({
        _id: jobId,
    },
    {
        title,
        experience,
        openings,
        location,
        workMode,
        package,
        jobDescription,
    }, {
        new: true,
    });

    return res
        .status(200)
        .json({
            message: 'Job updated successfully',
            data: updatedJob,
        });
};

module.exports = editJob;
