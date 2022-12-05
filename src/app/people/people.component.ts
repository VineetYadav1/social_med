import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../appService/service.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private msg:ServiceService) { }

  peopleInfo:any
  
  ngOnInit(): void {
    const loginInfo=sessionStorage.getItem('loginInfo')
    this.msg.people().subscribe((data)=>{
      this.peopleInfo=data})

  }
  
  logout(){
    this.msg.logout()
  }
  
  

}
