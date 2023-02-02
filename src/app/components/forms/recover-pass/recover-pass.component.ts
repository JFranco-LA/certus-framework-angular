import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorsService } from 'src/app/services/firebase/errors.service';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent {
  recuperarUsuario: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private fbError: ErrorsService,
    private router: Router) {
    this.recuperarUsuario = fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  actionCodeSettings = {
    url: 'https://www.example.com',
    handleCodeInApp: true

  }

  sendMessage() {
    const { email } = this.recuperarUsuario.value;
    // console.log(email);
    this.isLoading = true;

    this.auth.sendPasswordResetEmail(email, this.actionCodeSettings)
      .then(() => {
        this.toastr.info('Se ha enviado un mensaje a su correo', 'Recuperar Contraseña');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err);
        this.isLoading = false;
        this.toastr.error(this.fbError.codeError(err.code), 'Ha ocurrido un problema');
      })
  }
}
