import { Component, DoCheck, OnInit } from '@angular/core';
import { AnyArray } from 'mongoose';
import { ServiceService } from '../appService/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,DoCheck {

  constructor(private msg:ServiceService){}
// auto call user info
  user:any
  userPost:any
 
  ngOnInit(){
    const userInfo=sessionStorage.getItem('loginInfo')
    if(userInfo){
      this.msg.login(JSON.parse(userInfo))
    }
  }

  ngDoCheck():void{
    this.user=this.msg.user
    this.userPost=this.msg.userPost
    console.log(this.user)
    
  }

  // for post a pic
  pic=""
  image(event:any){
    this.pic=event.target.files[0]
  }

  Post(event:any){
    const formdata =new FormData()
    formdata.append('file',this.pic);
    formdata.append('comment',event.comment);
    formdata.append('email',this.user.email)
    console.log(formdata)
    this.msg.addPost(formdata).subscribe((res)=>{
      this.userPost.push(res)
    });

  }
  // pic change
  cpic=""
  picture(event:any){
    this.cpic=event.target.files[0]
  }

  changepic(event:any){
    const formdata =new FormData()
    formdata.append('file',this.cpic);
    formdata.append('email',this.user.email)
    console.log(formdata)
    this.msg.changepic(formdata)
  }
  
  logout(){
    this.msg.logout()
  }

}
