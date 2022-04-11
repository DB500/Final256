import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { Tool1Component } from './tool1/tool1.component';
import { Tool2Component } from './tool2/tool2.component';
import { Tool3Component } from './tool3/tool3.component';
import { Tool4Component } from './tool4/tool4.component';
import { Tool5Component } from './tool5/tool5.component';
import { Tool6Component } from './tool6/tool6.component';
import { Tool7Component } from './tool7/tool7.component';
import { Tool8Component } from './tool8/tool8.component';
import { Tool9Component } from './tool9/tool9.component';
import { Tool10Component } from './tool10/tool10.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    Tool1Component,
    Tool2Component,
    Tool3Component,
    Tool4Component,
    Tool5Component,
    Tool6Component,
    Tool7Component,
    Tool8Component,
    Tool9Component,
    Tool10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
