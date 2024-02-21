const JobModel = require('../models/job.models.js');

const deleteJob = async (req, res) => {
    const { jobId } = req.body;

    const job = await JobModel.findOne({
        _id: jobId,
    });

    if (!job) {
        return res.status(400).json({
            message: 'No job found',
        });
    }
    await JobModel.findByIdAndDelete({
        _id: jobId,
    });

    return res
        .status(200)
        .json({
            message: 'Job deleted successfully',
        });
};

module.exports = deleteJob;
