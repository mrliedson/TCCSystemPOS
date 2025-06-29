import database from '../repository/mysql.js';

async function createProd(nome, marca, codBarras, codProduto, fornecedor, tipo, modelo, categoria, dataValidade, preco) {
    const sql = `INSERT INTO cadastro_produto (
        nome, marca, codigo_barras, codigo_produto, fornecedor, tipo_produto, modelo, categoria, data_validade, preco
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const infoUser = [nome, marca, codBarras, codProduto, fornecedor, tipo, modelo, categoria, dataValidade, preco];

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();
}

async function updateProd(nome, marca, codBarras, fornecedor, tipo, modelo, categoria, dataValidade, preco, dataExclusao, ativo, id) {
    const sql = "UPDATE cadastro_produto SET nome = ?, marca = ?, codigo_barras = ?, fornecedor = ?, tipo_produto = ?, modelo = ?, categoria = ?, data_validade = ?, preco = ?, data_exclusao = ?, ativo = ?   WHERE id = ?";

    const infoUser = [nome, marca, codBarras, fornecedor, tipo, modelo, categoria, dataValidade, preco, dataExclusao, ativo, id]

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();    
}

async function listProd() {
    const sql = "SELECT * FROM cadastro_produto WHERE ativo = 1";

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function listProdByType(codBarras) {
    const sql = "SELECT * FROM cadastro_produto WHERE ativo = 1 AND codigo_barras = ?";

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql, codBarras);
    conn.end();
    return rows;
}

async function deleteProd(codBarras) {
    const sql = "UPDATE cadastro_produto SET ativo = 0, data_exclusao = current_timestamp WHERE codigo_barras = ?";

    const conn = await database.connectDB();
    await conn.query(sql, codBarras);
    conn.end();
}
export default {createProd, updateProd, listProd, listProdByType, deleteProd};