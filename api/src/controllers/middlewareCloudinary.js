const path = require('path');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: (req, file) => {
        const fileNameWithoutExt = path.parse(file.originalname).name;
        return {
            folder: 'image_video_project',
            resource_type: 'auto',
            public_id: `${Date.now()}_${fileNameWithoutExt}`,
        }
    }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;