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

    static async create(newVideo){
        if(newVideo.titulo == '' || 'titulo' in newVideo == false){
            throw new Error(console.error("Titulo em Branco"))
        }
        if(newVideo.descricao == '' || 'descricao' in newVideo == false){
            throw new Error(console.error("Descricao vazia"))
        }else{
            await VideoRepository.create(newVideo);
        }
    }

    static async update(id, newData){
        try{

            if(newVideo.titulo == '' || 'titulo' in newVideo == false){
                throw new Error(console.error("Titulo em Branco"))
            }
            if(newVideo.descricao == '' || 'descricao' in newVideo == false){
                throw new Error(console.error("Descricao vazia"))
            }else{
                const newVideo = await VideoRepository.update(id, newData);
                return newVideo;
            }
        }catch(error){
            throw error;
        }
    }

    static async delete(id){
        try{
        
            const videoDeletado = await VideoRepository.delete(id);
            return videoDeletado;
            
        }catch(error){
            throw error;
        }
    }

}


export default VideoService;