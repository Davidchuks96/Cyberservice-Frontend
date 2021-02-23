import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';
import { Individualservice } from 'src/Model/IndividualService';
import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { Service } from 'src/Model/service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {
@Input() cleardata:boolean=false;
Input:Individualservice;
@Input() Data:Individualservice=new Individualservice();
@ViewChild('closeBtn') cb: ElementRef

  constructor(public service:UserService,private toastr: ToastrService,private route:Router) { }

  ngOnInit() {
    this.service.formgroup.reset();
  }
  Register(regForm:NgForm) {
    this.Input=new Individualservice();
    console.log(regForm);
    this.service.addservice(this.Input).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formgroup.reset();
          this.toastr.success('Service created!', 'Service Added successfully.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'Duplicate Name':
                this.toastr.error('Name is already taken',' failed.');
                break;

              default:
              this.toastr.error(element.description,'Request failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  TakeHome(){
    
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}
