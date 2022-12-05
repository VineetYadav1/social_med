import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../appService/service.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor( private msg:ServiceService) { }

  ngOnInit(): void {
  }
  logi="forget"
  forget(detail: any) {

    if(detail.email!="" && detail.oldpasswor!="" && detail.oldpasswor!=""){
    this.msg.forget(detail)
    this.logi="login";
    }
   
  }
}
