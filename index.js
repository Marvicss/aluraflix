import express from "express";
import videoRoutes from "./src/routes/videoRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json(),videoRoutes);
};

export default routes;
