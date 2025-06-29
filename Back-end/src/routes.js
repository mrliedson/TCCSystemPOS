import express from "express";
import userController from "./controllers/userController.js";
import empresaController from "./controllers/empresaController.js";
import donoController from "./controllers/donoController.js";
import produtoController from "./controllers/produtoController.js";
// import loginController from './controllers/loginController.js';

const routes = express();

routes.use("/user",  userController);
routes.use("/empresa",  empresaController);
routes.use("/dono", donoController);
routes.use("/produto", produtoController);
// routes.use('/login', loginController);

export default routes;
