import express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController {

    prijava = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let lozinka = req.body.lozinka;

        Korisnik.findOne({'kor_ime': kor_ime, 'lozinka': lozinka}, (err, korisnik) => {
            if(err) 
                console.log(err);
            else 
                res.json(korisnik);
        })
    }

    dohvatiProizvod = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let naziv = req.body.naziv;

        console.log(kor_ime);
        console.log(naziv);

        Korisnik.findOne({'kor_ime': kor_ime, 'proizvodi.naziv': naziv}, (err, korisnik) => {
            if(err) console.log(err);
            else {
                res.json(korisnik);
                if(korisnik) console.log('Korisnik nije null!');
            }
        })
    }

}