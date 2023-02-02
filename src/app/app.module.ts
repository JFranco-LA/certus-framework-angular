import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { WaveComponent } from './components/shared/wave/wave.component';
import { LoginComponent } from './components/forms/login/login.component';
import { RecoverPassComponent } from './components/forms/recover-pass/recover-pass.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/forms/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';


//TOAST
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


// FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';
import { MensajeriaComponent } from './views/mensajeria/mensajeria.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InicioComponent,
    UsuariosComponent,
    NavigationComponent,
    WaveComponent,
    LoginComponent,
    RecoverPassComponent,
    RegisterComponent,
    ContactComponent,
    SpinnerComponent,
    MensajeriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
