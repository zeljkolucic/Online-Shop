import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res)=> new KorisnikController().prijava(req, res)
)

korisnikRouter.route('/dohvatiProizvod').post(
    (req, res) => new KorisnikController().dohvatiProizvod(req, res)
)

export default korisnikRouter;