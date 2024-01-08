import app from "./app.js";
import express from 'express'

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serivdor iniciado na porta");
});

