import express from "express";
import service from "../services/produtoService.js";

const route = express.Router();

route.get("/",  async (request, response) => {
    const produtos = await service.listProd();

    if(produtos.length < 1) {
        return response.status(204).end();
    }
    return response.status(200).send({"message": produtos});
});

route.get("/:codBarras",  async (request, response) => {
    const {codBarras} = request.params;
    const produtos = await service.listProdByType(codBarras);

    if(produtos.length < 1) {
        return response.status(204).end();
    }
    return response.status(200).send({"message": produtos});
});

route.post("/", async (request, response) => {
    const {nome, marca, codBarras, codProduto, fornecedor, tipo, modelo, categoria, dataValidade, preco} = request.body;

    await service.createProd(nome, marca, codBarras, codProduto, fornecedor, tipo, modelo, categoria, dataValidade, preco);

    return response.status(201).send({"message": "Produto cadastrado com sucesso!"})
});


route.put('/:id',  async (request, response) => {
    const {nome, marca, codBarras, fornecedor, tipo, modelo, categoria, dataValidade, preco, dataExclusao, ativo} = request.body;
    const {id} = request.params;

    await service.updateProd(nome, marca, codBarras, fornecedor, tipo, modelo, categoria, dataValidade, preco, dataExclusao, ativo, id);
    
    return response.status(200).send({"message": "Dados atualizados com sucesso"});

});

route.delete("/:codBarras",  async(request, response) => {
    const {codBarras} = request.params;
    await service.deleteProd(codBarras);

    return response.status(200).send({"message": "Produto excluido com sucesso"});
});
export default route;