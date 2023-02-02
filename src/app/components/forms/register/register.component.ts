import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrarUsuario: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  registerData() {
    const { email, password, repeatPassword } = this.registrarUsuario.value;
    console.log(email, password, repeatPassword);
  }

}
