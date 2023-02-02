import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;
  sesionUsuario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sesionUsuario = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginAccount() {
    const { email, password } = this.sesionUsuario.value;
    console.log(email, password);
  }

}

