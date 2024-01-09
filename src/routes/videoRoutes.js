import VideoController from "../controller/videoController.js";
import  express  from "express";

const routes = express.Router();

routes.get('/videos',VideoController.findAll);
routes.get('/videos/:id',VideoController.findById);
routes.post('/videos',VideoController.create);
routes.put('/videos/:id', VideoController.update);
routes.delete('/videos/:id',VideoController.delete);


export default routes;