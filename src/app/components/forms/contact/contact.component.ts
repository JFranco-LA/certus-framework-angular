import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: any = ''
  dataUser: any;

  messageForm: FormGroup;

  constructor(private auth: AngularFireAuth,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private messageServ: MessageService) {
    this.messageForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      if (user) {
        this.dataUser = user;
        this.email = user?.email;
      }
    });
  }


  sendMessage() {
    this.messageForm.value.email = this.email;
    console.log(this.messageForm.value);
    const message: Message = {
      name: this.messageForm.value.name,
      email: this.messageForm.value.email,
      country: this.messageForm.value.country,
      message: this.messageForm.value.message
    }

    this.messageServ.newMessage(message)
      .then(() => {
        this.toastr.success('El mensaje ha sido enviado con éxito', 'Mensajes: ')
        this.messageForm.reset();
      },
        error => {
          this.toastr.error('Ocurrio un error inesperado', 'Mensajes: ')
        })
      ;
  }

}
