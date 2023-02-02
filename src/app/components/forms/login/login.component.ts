import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { ErrorsService } from 'src/app/services/firebase/errors.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SesionService } from 'src/app/services/firebase/sesion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  sessionActive = false;
  private sessionSubscription!: Subscription;
  sesionUsuario: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private fbError: ErrorsService,
    private router: Router,
    private sesionUser: SesionService) {
    this.sesionUsuario = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.sessionSubscription = this.sesionUser.currentSessionStatus.subscribe(status => {
      this.sessionActive = status;
    });
  }

  loginAccount() {
    const { email, password } = this.sesionUsuario.value;
    // console.log(email, password);

    if (!email || !password) {
      this.toastr.error('Ingrese sus credenciales', 'Ha ocurrido un problema');
    }
    else {
      this.isLoading = true;
      this.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          // console.log(user);
          this.sesionUser.updateSessionStatus(true);
          this.router.navigate(['/inicio']);
        }).catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.toastr.error(this.fbError.codeError(err.code), 'Ha ocurrido un problema');
        });
    }
  }
}

