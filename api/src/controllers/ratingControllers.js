const Rating = require("../models/Rating");

const ratingControllers = {

    // Thêm đánh giá phim
    addRating: async (req, res) => {
        try {
            const { movieId, userId, stars, comment } = req.body;

            const rating = await Rating.create({ movieId, userId, stars, comment });

            res.status(200).json({
                message: "Đánh giá thành công",
                data: rating
            });
        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Lấy tất cả đánh giá của 1 phim
    getRatingsByMovie: async (req, res) => {
        try {
            const movieId = req.params.movieId;

            const ratings = await Rating.find({ movieId }).populate("userId", "name");

            res.status(200).json(ratings);
        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Lấy số sao trung bình
    getMovieAverageStars: async (req, res) => {
        try {
            const movieId = req.params.movieId;

            const avg = await Rating.aggregate([
                { $match: { movieId: new require("mongoose").Types.ObjectId(movieId) } },
                {
                    $group: {
                        _id: "$movieId",
                        averageStars: { $avg: "$stars" },
                        totalRatings: { $sum: 1 }
                    }
                }
            ]);

            res.status(200).json(avg[0] || { averageStars: 0, totalRatings: 0 });

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },
};

module.exports = ratingControllers;
