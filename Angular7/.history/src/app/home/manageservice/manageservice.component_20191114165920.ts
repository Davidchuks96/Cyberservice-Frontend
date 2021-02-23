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
  filteredItems: any;
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
  assignCopy(){
    this.filteredItems = Object.assign([], this.overalllist);
 }
 filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.items).filter(
       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }
 this.assignCopy();//when you fetch collection from server.
}
