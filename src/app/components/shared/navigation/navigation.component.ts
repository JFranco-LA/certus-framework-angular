import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SesionService } from 'src/app/services/firebase/sesion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  sesionActiva = false;
  dataUser: any;
  // correoAdmin = 'jfranco.abrahan@gmail.com';
  

  private sessionSubscription!: Subscription;

  // private loginSubscription!: Subscription;

  constructor(
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private sesionUser: SesionService,
    private router: Router) { }

  ngOnInit(): void {
    this.sessionSubscription = this.sesionUser.currentSessionStatus.subscribe(status => {
      this.sesionActiva = status;
    });
    this.auth.currentUser.then((user) => {
      if (user) {
        this.dataUser = user;
      }
    });
  }

  logout() {
    setTimeout(() => {
      this.auth.signOut()
        .then(() => {
          this.toastr.info('Sesion Finalizada', 'Mensaje de la Web');
          this.router.navigate(['/inicio'])
          this.sesionUser.updateSessionStatus(false);
          // this.sesionUser.changeLoginStatus(false);
        });
    }, 400);
  }
}


