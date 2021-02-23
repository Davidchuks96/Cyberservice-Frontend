import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/Model/service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './nav.component.html',
  styles: ['./nav.component.css']
})
export class navComponent implements OnInit {
  userDetails;
  selectedCountry: number;  
  overalllist:Service[];
  dataavailbale: Boolean = false;
  isExpanded = false;
  constructor(private router: Router, private service: UserService,private httpservice:HttpClient) {
   
   }

  ngOnInit() {
    this.service.getAllOverallService().subscribe(  
      data => {  
       this.overalllist = data as any [];  
      }  
    );  
  }  
    
  onSubmit() {  
    console.log(this.selectedCountry);  
    alert(this.selectedCountry);  
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
