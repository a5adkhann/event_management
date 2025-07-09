const mongoose = require("mongoose");

const exposModel = new mongoose.Schema({
    title: String,
    date: String,
    location: String,
    description: String,
    theme: String,
    exibitor_requests: Array,
    exibitor_lists: Array,
    attendee_lists: Array,
    speaker: String,
    topic: String,
    location: String,
})

module.exports = mongoose.model("Expo", exposModel);