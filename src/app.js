import  express  from "express";
import conectanoBanco from "./dbConfig.js";
import routes from "../index.js";

const conexao = await conectanoBanco();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
  
conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
})
  
const app = express();
routes(app);

export default app;