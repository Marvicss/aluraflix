import mongoose from "mongoose";

async function conectanoBanco(){
mongoose.connect('mongodb+srv://admin:admin123@cluster0.rilleiw.mongodb.net/videos?retryWrites=true&w=majority')

return mongoose.connection;
}


export default conectanoBanco;

//mongodb+srv://admin:admin123@cluster0.rilleiw.mongodb.net/livraria?retryWrites=true&w=majority