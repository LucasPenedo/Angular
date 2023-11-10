import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

const routes: Routes = [
  {path: 'contacts', component: ContactHomeComponent},
  { path: 'contact/new', component: ContactNewComponent },
  {path: 'contact/:id', component: ContactDetailComponent},
  {path: 'products', component: ProductHomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
