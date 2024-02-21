const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    openings: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobDescription: [String],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Job', jobSchema);
