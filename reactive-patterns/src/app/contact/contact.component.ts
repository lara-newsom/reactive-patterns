import { Component, OnDestroy, inject } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb';
import { ContactForm } from '../models/contact-form';
import { ContactService } from '../services/contact.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    BreadcrumbsComponent,
    NgIf,
    FormsModule,
  ],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnDestroy{
  readonly contactService = inject(ContactService);
  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };
  submitted = false;
  loading = false;

  breadcrumbs: Breadcrumb[] = [
    {
      display: 'Contact',
      routerLink: ''
    },
  ];

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService.submitContactForm(model).pipe(
      // Since we are directly subscribing to the observable we have to unsubscribe when the component destroys
      // This is to avoid memory leaks
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.loading = false;
    })
  }

  clearForm() {
    this.submitted = false;
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    }
  }

  // This sends a value through the ReplaySubject which causes the takeUntil operator
  // to complete the observable which destroys the subscription
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
