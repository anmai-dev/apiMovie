const Comment = require("../models/Comment");

const commentControllers = {

    // Thêm bình luận
    addComment: async (req, res) => {
        try {
            const { movieId, userId, content } = req.body;

            const cmt = await Comment.create({ movieId, userId, content });

            res.status(200).json({
                message: "Bình luận thành công",
                data: cmt
            });

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Lấy tất cả bình luận theo phim
    getCommentsByMovie: async (req, res) => {
        try {
            const { movieId } = req.params;

            const comments = await Comment.find({ movieId })
                .populate("userId", "name avatar")
                .sort({ createdAt: -1 });

            res.status(200).json(comments);

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Xoá bình luận (tuỳ chọn)
    deleteComment: async (req, res) => {
        try {
            const { id } = req.params;

            await Comment.findByIdAndDelete(id);

            res.status(200).json({
                message: "Đã xoá bình luận"
            });

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    }
};

module.exports = commentControllers;
