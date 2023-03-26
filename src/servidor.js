import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";


const app = express();
const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
console.log(caminhoAtual)
const diretorioPublico = path.join(caminhoAtual, "../..", "public")

app.use(express.static(diretorioPublico));

app.get("/", (req, res) => {
  res.sendFile(`${diretorioPublico}/index.html`)
})

const servidorHttp = http.createServer(app);

servidorHttp.listen(porta, () => 
  console.log(`Servidor escutando na porta ${porta}`))

const io = new Server(servidorHttp);


export default io;