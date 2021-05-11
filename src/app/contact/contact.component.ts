import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  name:string = '';
  title:string = '';
  suggestion:string = '';

  constructor() { }

  send() {
    if (this.name.trim() && this.title.trim() && this.suggestion.trim()) {
      this.name = this.title = this.suggestion = '';
      alert('Thank you for your replying!')
    } else {
      alert('You don\'t fill all fields!')
    }
  }

}
