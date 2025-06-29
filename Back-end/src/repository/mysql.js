import mysql from "mysql2/promise";

async function connectDB() {
    return await mysql.createConnection({
        "password":"Ali?310599",
        "host":"localhost",
        "user":"root",
        "port":3306,
        "database":"systemPos"
    });
}
export default {connectDB};