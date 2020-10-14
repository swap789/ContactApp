import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';

import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' }, // redirect to `contact-component`
  { path: 'contact', component: ContactComponent },
  { path: 'contact-details/:id', component: ContactDetailsComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
