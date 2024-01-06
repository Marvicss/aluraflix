import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, require: true},
    descricao: {type: String}
})

const video = mongoose.model("video", videoSchema);