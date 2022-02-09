import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @ViewChild('mainform') contactForm = {} as ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  name = "";
  email = "";
  messages = "";

  onSubmit() {
    if (this.contactForm) {
      this.http.post('https://formspree.io/f/mwkylzwz', [
        { name: this.name, email: this.email, messages: this.messages },
        ]).subscribe(
          response => {
            console.log(response);
          })
    }
    else {
      console.log('nesuccess')
    }
  } 
}

