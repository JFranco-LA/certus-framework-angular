import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: any = 'no ha iniciado sesión'
  dataUser: any;

  constructor(private auth: AngularFireAuth,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      if (user) {
        this.dataUser = user;
        this.email = user?.email;
      }
    });
  }

}
