import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '../contact.service';
import { IContact } from './../contact.interface';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    gender: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
  });

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.contactForm);
    if (this.contactForm && this.contactForm.status === "VALID") {
      const contact: IContact = this.contactForm.value;
      this.contactService.addContact(contact);
    }
  }
}
