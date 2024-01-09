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

    static async create(req,res){
        try{
            const newVideo = req.body;
            await VideoService.create(newVideo);
            res.status(201).json({message: "Usuário Enviado"});
        }catch(error){
            res.status(400).json({message: "Falha ao enviar usuário"});
        }
    }

    static async update(req,res){
        const newData = req.body;
        const id = req.params.id;

        try{
            const videoAtualizado = await VideoService.update(id, newData);
            res.status(200).json(videoAtualizado);
        }catch(error){
            res.status(400).json({message: "Falha ao atualizar"});
        }
        
    }

    static async delete(req,res){
        try{
            const id= req.params.id;
            const videoDeletado = await VideoService.delete(id);
            res.status(200).json({message: videoDeletado});
        }catch(error){
            res.status(404).json({message: "Falha ao deletar video;"})
        }
    }

}

export default VideoController;