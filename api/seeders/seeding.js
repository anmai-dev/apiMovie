const mongoose = require("mongoose");
const Video = require("../src/models/Videos"); // Đường dẫn model

// Kết nối MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/nhom10", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Dữ liệu mẫu
const videoData = [
    {
        title: "Highlight: Real Madrid vs Barcelona",
        useURL: true,
        thumbnail: "https://example.com/thumb1.jpg",
        videoURL: "https://www.youtube.com/watch?v=xxxxx",
        tags: ["football", "highlight", "laliga"],
        duration: 183,
        isPublic: true
    },
    {
        title: "Trailer Movie 2025",
        useURL: true,
        thumbnail: "https://example.com/thumb2.jpg",
        videoURL: "https://www.youtube.com/watch?v=yyyyy",
        tags: ["movie", "trailer"],
        duration: 135,
        isPublic: true
    },
    {
        title: "Hướng dẫn dùng Node.js CRUD",
        useURL: false,
        thumbnail: "https://example.com/thumb3.jpg",
        videoFile: "uploads/videos/tutorial-node.mp4",
        tags: ["nodejs", "backend", "tutorial"],
        duration: 420,
        isPublic: true
    }
];

async function seed() {
    try {
        await Video.deleteMany(); // Xóa data cũ
        await Video.insertMany(videoData); // Thêm data mới
        console.log("Seeding completed!");
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
        mongoose.connection.close();
    }
}

seed();
