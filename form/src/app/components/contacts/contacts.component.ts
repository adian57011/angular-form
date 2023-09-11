import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  email:string = "mail@mail.com";
  address:string = "Avenue-6,Mirpur DOHS "
  contact: string = "+88018687675756"
}
