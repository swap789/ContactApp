import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ContactService } from '../contact.service';
import { IContact } from './../contact.interface';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  contactFormLabel: string = "Add Contact";
  formBtnName: string = "Create";

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    gender: new FormControl('Male', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
  });

  constructor(private contactService: ContactService, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.mode === "edit") {
      this.contactFormLabel = "Edit Contact";
      this.formBtnName = "Save";
      this.setData(data.contact);
    }
  }

  ngOnInit(): void {

  }

  setData(data) {
    this.contactForm.controls['name'].setValue(data.name);
    this.contactForm.controls['email'].setValue(data.email);
    this.contactForm.controls['mobileNo'].setValue(data.mobileNo);
    this.contactForm.controls['gender'].setValue(data.gender);
    this.contactForm.controls['companyName'].setValue(data.companyName);
  }

  onSubmit() {
    if (this.contactForm && this.contactForm.status === "VALID") {
      const contact: IContact = this.contactForm.value;
      this.contactService.addContact(contact);
    }
  }
}
