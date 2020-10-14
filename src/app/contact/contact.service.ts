import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { CONTACTLIST as CONTACT_LIST } from "./contact-mock"
import { IContact } from './contact.interface';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  CONTACTS;
  constructor() {
    this.CONTACTS = this.addIdToContact();
  }

  addIdToContact() {
    const contactList = CONTACT_LIST.map(contact => {
      const id = uuidv4();
      contact["id"] = id;
      return contact;
    })
    return contactList;
  }

  getContacts(): Observable<any> {
    // const contactList = CONTACT_LIST.map(contact => {
    //   const id = uuidv4();
    //   contact["id"] = id;
    //   return contact;
    // })
    let observables = of(this.CONTACTS)
    return observables;
  }

  addContact(contact: IContact) {
    let newContact = { ...contact, id: uuidv4() };
    this.CONTACTS.push(newContact);
  }

  getContact(id: string): Observable<any> {
    const contact = this.CONTACTS.find(contact => contact.id === id);
    return of(contact);
  }
}
