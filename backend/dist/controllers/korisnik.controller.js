"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijava = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOne({ 'kor_ime': kor_ime, 'lozinka': lozinka }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dohvatiProizvod = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let naziv = req.body.naziv;
            console.log(kor_ime);
            console.log(naziv);
            korisnik_1.default.findOne({ 'kor_ime': kor_ime, 'proizvodi.naziv': naziv }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else {
                    res.json(korisnik);
                    if (korisnik)
                        console.log('Korisnik nije null!');
                }
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map