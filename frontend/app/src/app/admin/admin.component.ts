import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private proizvodService: ProizvodService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.proizvodService.dohvatiSveProizvode().subscribe((proizvodi: Proizvod[]) => {
      this.proizvodi = proizvodi;
    });
  }

  korisnik: Korisnik;
  proizvodi: Proizvod[];

  uvecajBrojProizvoda(proizvod) {
    this.proizvodService.uvecajBrojProizvoda(proizvod.naziv).subscribe((res) => {
      if(res['poruka'] == 'ok') {
        proizvod.kolicina++;
      }
    })
  }

  umanjiBrojProizvoda(proizvod) {
    this.proizvodService.umanjiBrojProizvoda(proizvod.naziv).subscribe((res) => {
      if(res['poruka'] == 'ok') {
        proizvod.kolicina--;
      }
    })
  }

}
