import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: '**', redirectTo: '' }  // Redirect to home for undefined routes

];
