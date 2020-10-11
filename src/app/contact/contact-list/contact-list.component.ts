import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IContact } from '../contact.interface';
import { AddEditComponent } from '../add-edit/add-edit.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})


export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService, public dialog: MatDialog) { }

  columnsToDisplay = [
    {
      name: "Name",
      colum: "name",
      index: "name"
    },
    {
      name: "Email",
      colum: "email",
      index: "email"
    },
    {
      name: "Mobile Number",
      colum: "mobileNo",
      index: "mobileNo"
    },
    {
      name: "Gender",
      colum: "gender",
      index: "gender"
    },
    {
      name: "Company Name",
      colum: "companyName",
      index: "companyName"
    }];

  columns = ['name', 'email', 'mobileNo', 'gender', 'companyName']

  dataSource: IContact[] = [];

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe((contacts: IContact[]) => {
      this.dataSource = contacts;
      console.log(contacts);
    }, error => {

    })
  }

  addContact() {
    const dialogRef = this.dialog.open(AddEditComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
