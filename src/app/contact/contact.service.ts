import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { CONTACTLIST } from "./contact-mock"
import { IContact } from './contact.interface';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {
  }

  getContacts(): Observable<any> {
    const contactList = CONTACTLIST.map(contact => {
      const id = uuidv4();
      contact["id"] = id;
      return contact;
    })
    let observables = of(contactList)
    return observables;
  }

  addContact(contact: IContact) {
    CONTACTLIST.push(contact);
  }
}
