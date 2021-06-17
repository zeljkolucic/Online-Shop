"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proizvod_controller_1 = require("../controllers/proizvod.controller");
const proizvodRouter = express_1.default.Router();
proizvodRouter.route('/dohvatiSveProizvode').get((req, res) => new proizvod_controller_1.ProizvodController().dohvatiSveProizvode(req, res));
proizvodRouter.route('/uvecajBrojProizvoda').post((req, res) => new proizvod_controller_1.ProizvodController().uvecajBrojProizvoda(req, res));
proizvodRouter.route('/umanjiBrojProizvoda').post((req, res) => new proizvod_controller_1.ProizvodController().umanjiBrojProizvoda(req, res));
proizvodRouter.route('/kupiProizvod').post((req, res) => new proizvod_controller_1.ProizvodController().kupiProizvod(req, res));
proizvodRouter.route('/oceniProizvod').post((req, res) => new proizvod_controller_1.ProizvodController().oceniProizvod(req, res));
exports.default = proizvodRouter;
//# sourceMappingURL=proizvod.routes.js.map