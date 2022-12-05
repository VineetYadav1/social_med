import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import{FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ServiceService } from './appService/service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleComponent } from './people/people.component';
import { ChatComponent } from './chat/chat.component';
import { ForgetComponent } from './forget/forget.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SignUpComponent,
    PeopleComponent,
    ChatComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
