import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent {
  recuperarUsuario: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder) {
    this.recuperarUsuario = fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendMessage() {
    const { email } = this.recuperarUsuario.value;
    console.log(email);
  }
}
