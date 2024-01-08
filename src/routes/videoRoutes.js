import VideoController from "../controller/videoController.js";
import  express  from "express";

const routes = express.Router();

routes.get('/videos',VideoController.findAll);
routes.get('/videos/:id',VideoController.findById);


export default routes;