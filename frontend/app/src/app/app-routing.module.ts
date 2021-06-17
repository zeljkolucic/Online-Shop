import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { PrijavaComponent } from './prijava/prijava.component';

const routes: Routes = [
  {path: '', component: PrijavaComponent},
  {path: 'korisnik', component: KorisnikComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: PrijavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
