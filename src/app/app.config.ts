import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowUserComponent } from './showuser/showuser.component';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'show-user', component: ShowUserComponent }
];

// Export your application configuration
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // other providers can be added here
  ]
};
