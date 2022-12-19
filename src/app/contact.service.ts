import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL:string="http://localhost:8080/"
  
  constructor(private httpClient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
    return this.httpClient.post(`${this.baseURL}/contact`,contact,{responseType:"text"});
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseURL}/contacts`);
  }

  findContactById(id:number):Observable<Contact>{
    this.httpClient.get<Contact>(`${this.baseURL}/contact/${id}`);
  }
}
