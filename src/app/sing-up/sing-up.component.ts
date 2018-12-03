import { Component, OnInit } from '@angular/core';
import { AuthService        } from './../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent{

  constructor(private auth:AuthService) { 
    
  }

  sign(){
    
    this.auth.signUp()
  }

}
