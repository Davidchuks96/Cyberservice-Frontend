import { Observable } from 'rxjs';
import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Service } from 'src/Model/service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-manageservice',
  templateUrl: './manageservice.component.html',
  styleUrls: ['./manageservice.component.css']
})
export class ManageserviceComponent implements OnInit {
  overalllist:Service[];
  @Output() nameEvent = new EventEmitter<string>();
  @Input()  cleardata: boolean = false;
  @ViewChild('closeBtn') cb: ElementRef;
  @Pipe({name: 'FilterPipe',
})
  constructor(private service:UserService,private route:Router) { }

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
      res => 
      console.log(res);
      alert("service deleted successfully");
      this.TakeHome();
      
  }
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}

 

