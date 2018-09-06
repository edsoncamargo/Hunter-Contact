import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Contact } from '../../models/contact';
const axios = require('axios');

declare let $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  //Url da apikey
  apiKey: string = "yourapikey";

  form: FormGroup; // Váriavel que representa o nosso formulário
  email: Contact;

  loading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.email = new Contact(this.form.value.email, this.form.value.subject, this.form.value.name, this.form.value.message);

    this.loading = true;

    axios({ // Fazendo uma requisição para o servidor na porta da função /email
      method: "POST",
      url: this.apiKey,
      data: {
        email: this.email.email,
        subject: this.email.subject,
        name: this.email.name,
        message: this.email.message,
      }
    }).then((res) => {
      console.log(res);
      $('#successModal').modal('show');
      this.onCancel();
      $('#loadingModal').modal('toggle');
      this.loading = false;
      setTimeout(() => {
        $('#successModal').modal('toggle');
      }, 2000);
    });
  }

  onCancel() {
    this.form.reset();
  }

}
