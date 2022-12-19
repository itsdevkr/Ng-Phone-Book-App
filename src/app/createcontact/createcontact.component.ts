import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {

  constructor(private service:ContactService){}

  contact:Contact = new Contact();
  msg:string="";

  saveContact(){
    this.service.createContact(this.contact).subscribe(response => {
      this.msg=response;
    });
  }
}
