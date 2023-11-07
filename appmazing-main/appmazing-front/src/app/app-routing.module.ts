import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { MatTableModule } from '@angular/material';

const routes: Routes = [
  {path: 'contacts', component: ContactHomeComponent},
  {path: 'material', component: MatTableModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
