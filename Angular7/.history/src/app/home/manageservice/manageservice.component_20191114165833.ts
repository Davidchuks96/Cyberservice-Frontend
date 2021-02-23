import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Service } from 'src/Model/service';

@Component({
  selector: 'app-manageservice',
  templateUrl: './manageservice.component.html',
  styleUrls: ['./manageservice.component.css']
})
export class ManageserviceComponent implements OnInit {
  overalllist:Service[];
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getAllOverallService().subscribe(  
      data => {  
       this.overalllist = data as any [];  
      });  
  }  
  DeleteService(overallServiceId: number):void{
    this.service.deleteService(overallServiceId).subscribe(
      data => {
        this.overalllist = data as any [];
      });
  }
  
}
