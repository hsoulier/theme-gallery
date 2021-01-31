const mangoose = require("mangoose")
const { Schema } = mangoose;


const GallerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    images: Array,
    themeId: {
        type: ObjectId,
        required: true
    },
    description: String
})


