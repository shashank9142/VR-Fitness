import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ShowUserComponent } from './showuser/showuser.component';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'show-user', component: ShowUserComponent }
  ];
  
  export const appConfig = [
    provideRouter(routes),
    provideClientHydration(),
  ];