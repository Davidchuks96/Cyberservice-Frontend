import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { navComponent } from './home/nav.component';
import { AddServicesComponent } from './home/add-Indvidualservices/add-services.component';
import { AddServiceComponent } from './home/add-service/add-service.component';
import { ManageserviceComponent } from './home/manageservice/manageservice.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { VehicleServiceComponent } from './home/vehicle-service/vehicle-service.component';
import { ViewAllVehiclesComponent } from './home/vehicle-service/view-all-vehicles/view-all-vehicles.component';


const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {path:'user', component: UserComponent,children: [
      { path:'registration', component: RegistrationComponent },
      { path:'login', component: LoginComponent }
    ]
  },
 {path:'home',component:navComponent,canActivate:[AuthGuard]},

 {path:'Date',redirectTo:'/home/add-service',pathMatch:'full'},

 {path:'home',component:navComponent,children:[
  {path:'home',component:navComponent},
  {path:'add-service',component:AddServiceComponent},
  {path: 'Manage-service', component:ManageserviceComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-individualService/:id',component:AddServicesComponent},
  {path:'Vehicleservice',component:VehicleServiceComponent,children:[
    {path:'view-all-vehicles',component:ViewAllVehiclesComponent}]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
