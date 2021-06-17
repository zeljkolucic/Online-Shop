import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  prijava (kor_ime, lozinka) {
    const podaci = {
      kor_ime: kor_ime,
      lozinka: lozinka
    }
    return this.http.post(`${this.uri}/korisnik/prijava`, podaci);
  }

  dohvatiProizvod(kor_ime, naziv) {
    const podaci = {
      kor_ime: kor_ime,
      naziv: naziv
    }
    return this.http.post(`${this.uri}/korisnik/dohvatiProizvod`, podaci);
  }

}
