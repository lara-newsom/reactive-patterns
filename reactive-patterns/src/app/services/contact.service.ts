import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { first, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContactForm(model: ContactForm){
    // delayed response to mock network traffic
    return timer(3000).pipe(
      tap(() => console.log('ContactForm Submitted with Values:', model)),
      // emits one value then completes like the Angular httpRequest
      first()
    )
  }
}
