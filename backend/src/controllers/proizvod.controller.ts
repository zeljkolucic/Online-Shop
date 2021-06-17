import express from 'express';
import proizvod from '../models/proizvod';
import Proizvod from '../models/proizvod';
import Korisnik from '../models/korisnik';

export class ProizvodController {

    dohvatiSveProizvode = (req: express.Request, res: express.Response) => {
        Proizvod.find({}, (err, proizvodi) => {
            if(err) console.log(err);
            else res.json(proizvodi);
        })
    }

    uvecajBrojProizvoda = (req: express.Request, res: express.Response) => {
        let naziv = req.body.naziv;
        Proizvod.collection.updateOne({'naziv': naziv}, {$inc: {'kolicina': 1}});
        res.json({poruka:'ok'});
    }

    umanjiBrojProizvoda = (req: express.Request, res: express.Response) => {
        let naziv = req.body.naziv;
        Proizvod.collection.updateOne({'naziv': naziv}, {$inc: {'kolicina': -1}});
        res.json({poruka: 'ok'});
    }

    kupiProizvod = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let naziv = req.body.naziv;

        Proizvod.collection.updateOne({'naziv': naziv}, {$inc: {'kolicina': -1}});
        Korisnik.findOne({'kor_ime': kor_ime, 'proizvodi.naziv': naziv}, (err, korisnikJeKupovaoProizvod)=>{
            if(err) console.log(err);
            else{
                if(korisnikJeKupovaoProizvod){
                    //updejt kolicina
                    Korisnik.collection.updateOne(
                        {'kor_ime': kor_ime, 'proizvodi.naziv': naziv},
                        {$inc: {'proizvodi.$.kolicina': 1}});
                }
                else{
                    //dodaj novi objekat
                    let kupovina={
                        naziv: naziv,
                        kolicina: 1
                    }
                    Korisnik.collection.updateOne({'kor_ime': kor_ime}, 
                    {$push: {"proizvodi": kupovina}});
                }
                res.json({poruka: 'ok'});
            }
        })
    }

    oceniProizvod = (req: express.Request, res: express.Response) => {
        let ocena = req.body.ocena;
        let naziv = req.body.naziv;

        let ocenaObj= {
            ocena: ocena
        }

        Proizvod.collection.updateOne({'naziv': naziv}, {$push: {'ocene': ocenaObj}});
        res.json({poruka: 'ok'})
    }

}
