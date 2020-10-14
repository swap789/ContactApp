import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id: string;
  contactDetails;
  constructor(private route: ActivatedRoute,
    private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id);
      this.getContactDetails()
    });
  }

  getContactDetails() {
    this.contactService.getContact(this.id).subscribe(contact => {
      if (contact) {
        this.contactDetails = contact;
        console.log(this.contactDetails);
      } else {
        this.router.navigate(["/contact"]);
      }

    }, error => {

    })
  }

  goBack() {
    this.router.navigate(["/contact"]);
  }

}
