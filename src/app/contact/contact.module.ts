import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MaterialModule } from '../material.module';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  declarations: [ContactComponent, ContactListComponent,
    ContactDetailsComponent,
    AddEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ContactComponent, ContactListComponent, ContactDetailsComponent]
})
export class ContactModule { }
