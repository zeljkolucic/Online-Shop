import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../../models/korisnik';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string;
  lozinka: string;
  greska: string;

  prijava() {
    this.korisnikService.prijava(this.kor_ime, this.lozinka).subscribe((kor: Korisnik) => {
      if(kor){
        localStorage.setItem('ulogovan', JSON.stringify(kor));
        if(kor.tip=='S'){
          this.router.navigate(['korisnik'])
        }
        else{
          this.router.navigate(['admin'])
        }
      }
      else{
        this.greska = 'Greska'
      }
    })
  }

}
