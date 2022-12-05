import { Component, DoCheck, OnInit } from '@angular/core';
import { ServiceService } from '../appService/service.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit ,DoCheck{

  constructor(private msg: ServiceService) { }
  data:any
  ngOnInit(): void {
    this.msg.chat().subscribe((res)=>{
      this.data=res,
      console.log(res)
    })
  }

  ngDoCheck():void{
   
  }

  send(msg:any){
    this.msg.send(msg).subscribe((res)=>{
      this.data.push(res)
    })
    console.log(msg)
  }
  logout(){
    this.msg.logout()
  }
}
