import VideoRepository from "../repository/videoRepository.js";


class VideoService{

    static async findAll(){
        const videos = await VideoRepository.findAll();
        return videos;
    }

    static async findById(id){
        const videos = await VideoRepository.findById(id);
        return videos;
    }

}


export default VideoService;