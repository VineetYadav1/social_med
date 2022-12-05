import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../appService/service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  constructor(private msg:ServiceService){}

  ngOnInit(): void {
  }
  img="./assets/download (12).jpeg"

  
  pic:any
  image(event:any){
    this.pic=event.target.files[0]

    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(event.target.files[0])
    myReader.onload = (event:any)=> {
    this.img = event.target.result
    }

  }
  signUp(form:any){
    console.log(form)
    const formdata =new FormData()
    formdata.append('file',this.pic);
    formdata.append('name',form.name);
    formdata.append('email',form.email);
    formdata.append('password',form.password);
    this.msg.addData(formdata)
  }
}
