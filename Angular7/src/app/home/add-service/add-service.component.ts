import { Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/Model/service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  @Input()  cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempemp:Service;
  @Input() objemp :Service=new Service();
  @ViewChild('closeBtn') cb: ElementRef;
  
  constructor(private service: UserService,private route:Router) { }

  ngOnInit() {
  }
  
  Register(regForm:NgForm){  
   
    this.objtempemp=new Service();
    this.objtempemp.Name=regForm.value.Name;
    this.objtempemp.Date=regForm.value.Date ;
   console.log(regForm);
    
  this.service.AddService(this.objtempemp).subscribe(res=>{
    console.log(res);
    alert("service Added successfully");
    this.TakeHome();
}
  ) 
  } 
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}
