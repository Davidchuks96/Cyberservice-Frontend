import { Observable } from 'rxjs';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Service } from 'src/Model/service';

@Component({
  selector: 'app-manageservice',
  templateUrl: './manageservice.component.html',
  styleUrls: ['./manageservice.component.css']
})
export class ManageserviceComponent implements OnInit {
  overalllist:Service[];
  @Output() nameEvent = new EventEmitter<string>();
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
      console.log(res);
      alert("service Added successfully");
      this.TakeHome();
  }
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}

 

