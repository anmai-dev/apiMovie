const review = require("../models/review");

const commentControllers = {

    // Thêm review
    addReview: async (req, res) => {
        try {
            const { movieId, userId, content } = req.body;

            const rv = await review.create({ movieId, userId, content });

            res.status(200).json({
                message: "gửi review thành công",
                data: rv
            });

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Lấy tất cả review theo phim
    getReviewsByMovie: async (req, res) => {
        try {
            const { movieId } = req.params;

            const review = await review.find({ movieId })
                .populate("userId", "name avatar")
                .sort({ createdAt: -1 });

            res.status(200).json(this.addReview);

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Xoá review (tuỳ chọn)
    deleteReview: async (req, res) => {
        try {
            const { id } = req.params;

            await review.findByIdAndDelete(id);

            res.status(200).json({
                message: "Đã xoá bình luận"
            });

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    }
};

module.exports = commentControllers;
