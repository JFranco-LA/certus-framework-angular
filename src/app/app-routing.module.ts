import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { RecoverPassComponent } from './components/forms/recover-pass/recover-pass.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { SesionGuard } from './guards/sesion.guard';
import { ContactoComponent } from './views/contacto/contacto.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { MensajeriaComponent } from './views/mensajeria/mensajeria.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recover-pass', component: RecoverPassComponent},
  {path: 'mensajeria', component: MensajeriaComponent, canActivate: [SesionGuard]},
  // {path: 'mensajeria', component: MensajeriaComponent},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
