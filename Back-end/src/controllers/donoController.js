import express from "express";
import service from "../services/donoService.js";
const route = express.Router();
//Um mundo de tecnologia
route.get("/",  async (request, response) => {
    const dono = await service.listDono();

    if(dono.length < 1) {
        return response.status(204).end();
    }
    return response.status(200).send({"message": dono});
});

route.get("/:id",  async (request, response) => {
    const {id} = request.params;
    const dono = await service.listDonoByType(id);

        if(dono.length < 1) {
        return response.status(204).end();
    }

    return response.status(200).send({"message": dono});
});
//comentario
route.post("/", async (request, response) => {
    const {cpf, data_nascimento, endereco_particular, codDono} = request.body;

    await service.createDono(cpf, data_nascimento, endereco_particular, codDono);

    return response.status(201).send({"message": "Dono cadastrado com sucesso!"})
});


route.put('/:codDono',  async (request, response) => {
    const {cpf, data_nascimento, endereco_particular, ativo} = request.body;
    const {codDono} = request.params;

    // if(password.length <= 5) {
    //     return response.status(400).send({"message": "A senha deve conter no minimo 6 caracteres!"});
    // }

    // if(typeUser.toUpperCase() != "Administrador".toUpperCase() && typeUser.toUpperCase() != "Comum".toUpperCase()) {
    //     return response.status(400).send({"message": "O tipo de usuário deve ser 'Administrador' ou 'Comum'."});
    // }

    await service.updateDono(cpf, data_nascimento, endereco_particular, ativo, id);
    
    return response.status(200).send({"message": "Dados atualizados com sucesso"});

});


route.delete("/:id",  async(request, response) => {
    const {id} = request.params;

    await service.deleteDono(id);

    return response.status(200).send({"message": "Dono excluido com sucesso"});
});
export default route;
