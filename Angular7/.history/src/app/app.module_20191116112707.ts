import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FilterPipe} from './@pipes'
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { navComponent } from './home/nav.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AddServicesComponent } from './home/add-Indvidualservices/add-services.component';
import { AddServiceComponent } from './home/add-service/add-service.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ManageserviceComponent } from './home/manageservice/manageservice.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { VehicleServiceComponent } from './home/vehicle-service/vehicle-service.component';
import { ViewAllVehiclesComponent } from './home/vehicle-service/view-all-vehicles/view-all-vehicles.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    navComponent,
    AddServicesComponent,
    AddServiceComponent,
    HomepageComponent,
    ManageserviceComponent,
    DashboardComponent,
    VehicleServiceComponent,
    ViewAllVehiclesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
