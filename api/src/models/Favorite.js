const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Video", required: true },
}, { timestamps: true });

// Ngăn user thêm 1 phim 2 lần
FavoriteSchema.index({ userId: 1, movieId: 1 }, { unique: true });

module.exports = mongoose.model("Favorite", FavoriteSchema);
