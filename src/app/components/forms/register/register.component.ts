import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { ErrorsService } from 'src/app/services/firebase/errors.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrarUsuario: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private fbError: ErrorsService,
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  registerData() {
    const { email, password, repeatPassword } = this.registrarUsuario.value;
    // console.log(email, password, repeatPassword);

    if (password === repeatPassword) {
      this.isLoading = true;
      this.auth.createUserWithEmailAndPassword(email, password).then((user) => {
        // console.log(user);
        this.toastr.success('Usuario registrado con éxito', 'Bienvenido!!');
        this.isLoading = false;
        this.registrarUsuario.reset();
      }).catch((err) => {
        this.toastr.error(this.fbError.codeError(err.code), 'Ha ocurrido un problema');
        this.isLoading = false;
        // console.log(err);
      });
    } else {
      this.toastr.error('Las contraseñas no coinciden', 'Ha ocurrido un problema')
      this.isLoading = true;
      setTimeout(() => { this.isLoading = false }, 150);
    }
  }

}
