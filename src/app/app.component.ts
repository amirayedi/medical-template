import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import Keycloak, { KeycloakInstance } from 'keycloak-js';
import { User } from './model/user';
import { KeycloakService } from './services/keycloak.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentComponent } from './appointment/appointment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  keycloakService!: KeycloakService
  constructor() {}
  ngOnInit(): void {
   
  }

  logout() {
   // this.keycloakService.logout();
   console.log(this.keycloakService._keycloak?.authenticated)
   console.log(this.keycloakService._keycloak?.token)
   console.log(this.keycloakService._keycloak?.userInfo)
  }

}