import { Injectable } from '@angular/core';
import Keycloak, { KeycloakInstance } from 'keycloak-js';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {


   _keycloak: Keycloak.KeycloakInstance | undefined ;
    private user :User | undefined;
  constructor() { }

    async init(): Promise<void> {
      try {
        // Initialize Keycloak
        this._keycloak = new Keycloak({
          url: 'http://localhost:8080',
          realm: 'demo-app',
          clientId: 'demo',
        });
  
        this._keycloak.init({ onLoad: 'check-sso' }).then((authenticated) => {
          if (!authenticated) {
            this.login();
          }
        });

       /* const initialized = await this._keycloak.init({ 
          onLoad:'login-required',
          checkLoginIframe: false,
        });
  
        if (initialized && this._keycloak.authenticated) {
          this.user = (await this._keycloak.loadUserProfile()) as User;
          console.log('User:', this._keycloak.tokenParsed?.sub);
        } else {
          console.error('Keycloak initialization failed or user not authenticated');
        }*/
      } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
      }
    }

    login() {
      this._keycloak?.login();
    }
  
    logout() {
       this._keycloak?.logout();
    }

    getToken(): Promise<string> {
      return new Promise((resolve, reject) => {
        if (this._keycloak?.authenticated) {
         
        } else {
          reject('Not authenticated');
        }
      });
    }
  
}
