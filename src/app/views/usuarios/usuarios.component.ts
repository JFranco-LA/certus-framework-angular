import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarioApi';
import { UsuariosAPIService } from 'src/app/services/usuarios-api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  linkPhoto = 'https://i.pravatar.cc/150?u=';
  usuarios: Usuarios[] = [];

  constructor(private userService: UsuariosAPIService) { }
  ngOnInit(): void {
    this.userService.getUsuarios().subscribe({
      next: (response) => {
        // console.log(response);
        this.usuarios = response
        this.usuarios.forEach(usuario => {
          usuario.foto = this.linkPhoto + usuario.name
        });
        console.log(this.usuarios);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
