import { Component, Directive, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register';
import { RegisterdetailsService } from '../registerdetails.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
@Directive({
  selector:'[ngModel]',
  exportAs:'ngModel'
})
export class RegisterComponent implements OnInit {

  register: Register[]=[];
  
  constructor(private registerdetailsService:RegisterdetailsService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  }
  onLogin()
  {
    this.router.navigate(['/login'])
  }
  onRegister(name:String)
  {
    
    this.router.navigate(['/success',name]);
  }
}
