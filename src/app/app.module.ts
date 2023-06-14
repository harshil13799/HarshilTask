import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 import { HeaderComponent } from './header/header.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { RegisterRoutingModule } from './register/register-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
