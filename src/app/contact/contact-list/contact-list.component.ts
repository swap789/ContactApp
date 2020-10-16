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

  columns = ['name', 'email', 'mobileNo', 'gender', 'companyName', 'view', 'menu']
  dataSource: IContact[] = [];

  constructor(private contactService: ContactService, public dialog: MatDialog,
    private router: Router) { }

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
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: {
        mode: 'create'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getContacts();
      console.log(`Dialog result: ${result}`);
    });
  }

  contactDetails(row) {
    this.router.navigate(['/contact-details', row.id]);
  }

  editContact(row) {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: {
        mode: 'edit',
        contact: row
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getContacts();
      console.log(`Dialog result: ${result}`);
    });
    console.log(row);
  }

  deleteContact() {
    //TODO: Add yes or no confirmation dialog
  }
}
