import database from '../repository/mysql.js';

async function createUser(nome, email, nomeUsuario, senha, telefone, whatsapp, tipo, genero) {
    const sql = `INSERT INTO usuarios (
        nome_completo, email, userlogin, senha_hash,
        telefone, whatsapp, tipo, genero
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const infoUser = [nome, email, nomeUsuario, senha, telefone, whatsapp, tipo, genero];

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();
}

async function updateUser(nome, email, nomeUsuario, senha, telefone, whatsapp, tipo, genero, ativo, data_bloqueio, id) {
    const sql = "UPDATE usuarios SET nome_completo = ?, email = ?, userlogin = ?, senha_hash = ?, telefone = ?, whatsapp = ?, tipo = ?, genero = ?, ativo = ?, data_bloqueio = ?   WHERE id = ?";

    const infoUser = [nome, email, nomeUsuario, senha, telefone, whatsapp, tipo, genero, ativo, data_bloqueio, id]

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();    
}

async function listUser() {
    const sql = "SELECT * FROM usuarios WHERE ativo = 1";

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function listUserByType(Email) {
    const sql = "SELECT * FROM usuarios WHERE ativo = 1 AND email = ?";

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql, Email);
    conn.end();
    return rows;
}

async function deleteUser(id) {
    const sql = "UPDATE usuarios SET ativo = 0, data_bloqueio = current_timestamp WHERE id = ?";

    const conn = await database.connectDB();
    await conn.query(sql, id);
    conn.end();
}
export default {createUser, updateUser, listUser, listUserByType, deleteUser};

