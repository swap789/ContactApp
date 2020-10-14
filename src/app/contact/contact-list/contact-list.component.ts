import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { IContact } from '../contact.interface';
import { AddEditComponent } from '../add-edit/add-edit.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService, public dialog: MatDialog,
    private router: Router) { }

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
    },
    {
      name: "",
      colum: "menu",
      index: "menu"
    }
  ];

  columns = ['name', 'email', 'mobileNo', 'gender', 'companyName', 'menu']

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
      this.getContacts();
      console.log(`Dialog result: ${result}`);
    });
  }

  contactDetails(row) {
    this.router.navigate(['/contact-details', row.id]);
  }
}
