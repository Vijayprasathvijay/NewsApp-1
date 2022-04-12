import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register';
import { RegisterdetailsService } from '../registerdetails.service';

@Component({
  selector: 'app-successregister',
  templateUrl: './successregister.component.html',
  styleUrls: ['./successregister.component.css']
})
export class SuccessregisterComponent implements OnInit {
  username:String=''
  register: Register=new Register();
  constructor(private registerdetailsService:RegisterdetailsService,
    private route:ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username']
  }
  goto()
  {
    this.registerdetailsService.updateRegister(this.username,this.register).subscribe(data=>{console.log(data)})
    this.router.navigate(['/header'])
  }
}
