import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Vehicle } from 'src/Model/Vehicle';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicle-service',
  templateUrl: './vehicle-service.component.html',
  styleUrls: ['./vehicle-service.component.css']
})
export class VehicleServiceComponent implements OnInit {
@Input() cleardata: boolean=false;
@Output() nameEvent=new EventEmitter<string>();
DataTemp:Vehicle;
@Input() Data:Vehicle=new Vehicle();
@ViewChild('closeBtn') cb:ElementRef;

  constructor( private service:UserService,private route:Router) { }

  ngOnInit() {

  }
      Register(regForm:NgForm){  
        debugger
      this.DataTemp=new Vehicle();   
      this.service.AddVehicleService(this.DataTemp).subscribe(res=>{
      console.log(res);
      alert("Vehicle service Added successfully");
      this.TakeHome();
  })
    } 
    TakeHome(){
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();
      this.route.navigateByUrl('');
    }
  }


