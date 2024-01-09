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

    static async create(newVideo){
        await video.create(newVideo);
    }

    static async update(id, newData){
        await video.findByIdAndUpdate(id, newData);

        return video.findById(id);
    }
    static async delete(id){
        await video.findByIdAndDelete(id);

        return "Usuário excluido com sucesso"
    }

}

export default VideoRepository;