import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Service } from 'src/Model/service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Individualservice } from 'src/Model/IndividualService';
import { Vehicle } from 'src/Model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44360/api';

      formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })


  });
    formgroup=this.fb.group({
    Name:[''],
    Description:[''],
    SerialNo:[''],
    NextDateOfService:[''],
    RecentDateOfService:['']

})

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

      register() {
      var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password
      
    };
    return this.http.post(this.BaseURI + '/account/Register', body);
  }

  deleteService(overallServiceId: number){
    return this.http.delete(this.BaseURI + '/OverallService/' + overallServiceId)
   }

  getAllOverallService() {
     return this.http.get( this.BaseURI +'/OverallService/Getservice');
  }
 
  AddService(emp: Service) {

    var body = {
     Id: emp.overallServiceId,
     Name: emp.Name, 
     Date: emp.Date
 }
  console.log(this.BaseURI);

 return this.http.post<Service>(this.BaseURI + '/OverallService/AddOverallservice', body);

}

  addservice(data:Individualservice) {
      var body = {
     ServiceId:data.ServiceId,
     Name: data.Name,
     Description: data.Description,
     SerialNo: data.SerialNo,
     NextDateOfService: data.NextDateOfService,
     RecentDateOfService:data.RecentDateOfService,
     overallServiceId:data.overallServiceId
   }
    debugger

  
    return this.http.post<Individualservice>(this.BaseURI + '/Service/AddService', body );
  }

     AddVehicleService(query:Vehicle){
     var body={
     VehicleName: query.VehicleName,
     Vehicletype:query.VehicleType,
     RegNo:query.RegNo,
     Officers:query.Officers,
     VehicleLicenseIssuedDate:query.VehicleLicenseIssuedDate,;
     VehicleLicenseExpirationDate:query.VehicleLicenseExpirationDate,
     IssuranceIssuedDate:query.IssuranceIssuedDate,
     IssuranceExpirationDate:query.IssuranceExpirationDate,
     RoadWorthinessIssuedDate:query.RoadWorthinessIssuedDate,
     RoadWorthinessExpirationDate:query.RoadWorthinessExpirationDate,
     HackneyPermitIssuedDate:query.HackneyPermitIssuedDate,
     HackneyPermitExpirationDate:query.HackneyPermitExpirationDate
   
   }
   
   return this.http.post(this.BaseURI + '/Vehicle/AddVehicle', body);
   }

   getAllVehicles()
   {
    return this.http.get( this.BaseURI + '/Vehicle/GetVehicles');
   }

  login(formData) 
  {

    return this.http.post(this.BaseURI + '/account/Login', formData);
  }

  UpdateService(ServiceId:number,editService:Individualservice)
  {
 return this.http.put(this.BaseURI + '/Service/Edit' + ServiceId,editService);
  }

   DeleteService(ServiceId:number)
 {
  return this.http.delete(this.BaseURI + '/Service/Delete/id' + ServiceId )
 }

    UpdateVehicle(VehicleId:number,editVehicle:Vehicle)
  {
   return this.http.put(this.BaseURI + '/Vehicle/Edit'+ VehicleId ,editVehicle )
  }

   DeleteVehicle(VehicleId:number)
  {
 return this.http.delete(this.BaseURI + 'Vehicle/Delete/id' + VehicleId)
  }

 
}
