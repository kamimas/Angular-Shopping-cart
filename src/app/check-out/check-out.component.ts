import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service'

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent{

  constructor(private auth:AuthService) {
    
    
  }

}
