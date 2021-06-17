import express from 'express';
import { ProizvodController } from '../controllers/proizvod.controller';

const proizvodRouter = express.Router();

proizvodRouter.route('/dohvatiSveProizvode').get(
    (req, res) => new ProizvodController().dohvatiSveProizvode(req, res)
)

proizvodRouter.route('/uvecajBrojProizvoda').post(
    (req, res) => new ProizvodController().uvecajBrojProizvoda(req, res)
)

proizvodRouter.route('/umanjiBrojProizvoda').post(
    (req, res) => new ProizvodController().umanjiBrojProizvoda(req, res)
)

proizvodRouter.route('/kupiProizvod').post(
    (req, res) => new ProizvodController().kupiProizvod(req, res)
)

proizvodRouter.route('/oceniProizvod').post(
    (req, res) => new ProizvodController().oceniProizvod(req, res)
)

export default proizvodRouter;