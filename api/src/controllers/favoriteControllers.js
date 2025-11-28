const Favorite = require("../models/Favorite");

const favoriteControllers = {

    // Thêm vào yêu thích
    addFavorite: async (req, res) => {
        try {
            const { userId, movieId } = req.body;

            const fav = await Favorite.create({ userId, movieId });

            res.status(200).json({
                message: "Đã thêm vào danh sách yêu thích",
                data: fav
            });

        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).json({ message: "Phim đã có trong danh sách yêu thích" });
            }
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Lấy danh sách yêu thích của user
    getFavorites: async (req, res) => {
        try {
            const { userId } = req.params;

            const list = await Favorite.find({ userId })
                .populate("movieId");  // Lấy info phim

            res.status(200).json(list);

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    },

    // Xoá khỏi yêu thích
    removeFavorite: async (req, res) => {
        try {
            const { userId, movieId } = req.body;

            await Favorite.findOneAndDelete({ userId, movieId });

            res.status(200).json({ message: "Đã xoá khỏi danh sách yêu thích" });

        } catch (error) {
            res.status(500).json({ message: "Lỗi server", error });
        }
    }
};

module.exports = favoriteControllers;
