import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { KeycloakService } from './services/keycloak.service';

/*export function initializeKeycloak(keycloak: KeycloakService) {

  return () =>
      keycloak.init();
}*/

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    
  /*      {
          provide: APP_INITIALIZER,
          useFactory: initializeKeycloak,
          multi: true,
          deps: [KeycloakService]
        },*/
    provideClientHydration()]
};
