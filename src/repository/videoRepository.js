import video from "../model/Video.js";


class VideoRepository{

    static async findAll(){
        const videos = await video.find({});
        return videos;
    }

    static async findById(id){
        const videoId = await video.findById(id)
        return videoId;
    }

}

export default VideoRepository;