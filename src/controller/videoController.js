import VideoService from "../service/videoService.js";


class VideoController{

    static async findAll(req,res){
        const videos = await VideoService.findAll();
        try{
            res.status(200).json(videos)
        }catch(error){
            res.status(404).json( "Nenhum usuário encontrado");
        }

    }

    static async findById(req,res){
        const id = req.params.id;
        const videos = await VideoService.findById(id);
        try {
            res.status(200).json(videos);
        } catch (error) {
            res.status(404).json("Usuário não localizado");
        }
        
    }

}

export default VideoController;