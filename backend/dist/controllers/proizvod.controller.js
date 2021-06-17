"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProizvodController = void 0;
const proizvod_1 = __importDefault(require("../models/proizvod"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
class ProizvodController {
    constructor() {
        this.dohvatiSveProizvode = (req, res) => {
            proizvod_1.default.find({}, (err, proizvodi) => {
                if (err)
                    console.log(err);
                else
                    res.json(proizvodi);
            });
        };
        this.uvecajBrojProizvoda = (req, res) => {
            let naziv = req.body.naziv;
            proizvod_1.default.collection.updateOne({ 'naziv': naziv }, { $inc: { 'kolicina': 1 } });
            res.json({ poruka: 'ok' });
        };
        this.umanjiBrojProizvoda = (req, res) => {
            let naziv = req.body.naziv;
            proizvod_1.default.collection.updateOne({ 'naziv': naziv }, { $inc: { 'kolicina': -1 } });
            res.json({ poruka: 'ok' });
        };
        this.kupiProizvod = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let naziv = req.body.naziv;
            proizvod_1.default.collection.updateOne({ 'naziv': naziv }, { $inc: { 'kolicina': -1 } });
            korisnik_1.default.findOne({ 'kor_ime': kor_ime, 'proizvodi.naziv': naziv }, (err, korisnikJeKupovaoProizvod) => {
                if (err)
                    console.log(err);
                else {
                    if (korisnikJeKupovaoProizvod) {
                        //updejt kolicina
                        korisnik_1.default.collection.updateOne({ 'kor_ime': kor_ime, 'proizvodi.naziv': naziv }, { $inc: { 'proizvodi.$.kolicina': 1 } });
                    }
                    else {
                        //dodaj novi objekat
                        let kupovina = {
                            naziv: naziv,
                            kolicina: 1
                        };
                        korisnik_1.default.collection.updateOne({ 'kor_ime': kor_ime }, { $push: { "proizvodi": kupovina } });
                    }
                    res.json({ poruka: 'ok' });
                }
            });
        };
        this.oceniProizvod = (req, res) => {
            let ocena = req.body.ocena;
            let naziv = req.body.naziv;
            let ocenaObj = {
                ocena: ocena
            };
            proizvod_1.default.collection.updateOne({ 'naziv': naziv }, { $push: { 'ocene': ocenaObj } });
            res.json({ poruka: 'ok' });
        };
    }
}
exports.ProizvodController = ProizvodController;
//# sourceMappingURL=proizvod.controller.js.map