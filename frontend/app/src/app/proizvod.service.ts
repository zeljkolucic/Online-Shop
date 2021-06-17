import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiSveProizvode() {
     return this.http.get(`${this.uri}/proizvod/dohvatiSveProizvode`);
  }
  
  uvecajBrojProizvoda(naziv) {
    const podaci = { 
      naziv: naziv
    }
    return this.http.post(`${this.uri}/proizvod/uvecajBrojProizvoda`, podaci);
  }

  umanjiBrojProizvoda(naziv) {
    const podaci = {
      naziv: naziv
    }
    return this.http.post(`${this.uri}/proizvod/umanjiBrojProizvoda`, podaci);
  }

  kupiProizvod(kor_ime, naziv) {
    const podaci = {
      kor_ime: kor_ime,
      naziv: naziv
    }
    return this.http.post(`${this.uri}/proizvod/kupiProizvod`, podaci);
  }

  oceniProizvod(naziv, ocena) {
    const podaci = {
      naziv: naziv,
      ocena: ocena
    }
    return this.http.post(`${this.uri}/proizvod/oceniProizvod`, podaci);
  }

}
