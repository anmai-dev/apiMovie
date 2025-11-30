const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Video", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stars: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Rating", RatingSchema);
