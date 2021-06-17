import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../models/korisnik';
import { Proizvod } from '../../models/proizvod';
import { KorisnikService } from '../korisnik.service';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  constructor(private proizvodService: ProizvodService, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.proizvodService.dohvatiSveProizvode().subscribe((proizvodi: Proizvod[]) => {
      if(proizvodi){
        this.proizvodi = proizvodi;
      }
    });
  }

  korisnik: Korisnik;
  proizvodi: Proizvod[];
  kupljeniProizvodi: Proizvod[];
  proizvod: string;
  ocena: string;

  dohvatiKupljeneProizvode() {
    this.proizvodi.forEach((proizvod) => {
      this.korisnikService.dohvatiProizvod(this.korisnik.kor_ime, proizvod.naziv).subscribe((korisnik) => {
        if(korisnik) {
          this.kupljeniProizvodi.push(proizvod);
        }
      })
    })
  }

  kupi() {
    this.proizvodi.forEach((proizvod) => {
      if(proizvod.zaKupovinu) {
        this.proizvodService.kupiProizvod(this.korisnik.kor_ime, proizvod.naziv).subscribe((res) => {
          if(res['poruka'] != 'ok') {
            alert('Greska!');
          } else {
            proizvod.kolicina--;
          }
        })
      }
    })
  }

  oceni() {
    this.proizvodService.oceniProizvod(this.proizvod, parseInt(this.ocena)).subscribe((res) => {
      if(res['poruka'] == 'ok') {
        alert('Ocena dodata!');
      }
    })
  }

}
