const enviarmensaje = require("../service/apiservice");

const verificar = (req, res)=>{
    res.send("verificado")
}

const recibir = (req, res)=>{
    res.send("recibir")
}

module.exports = {
    verificar,
    recibir,
};