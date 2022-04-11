import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {Tool1Component} from "./tool1/tool1.component";
import {Tool2Component} from "./tool2/tool2.component";
import {Tool3Component} from "./tool3/tool3.component";
import {Tool4Component} from "./tool4/tool4.component";
import {Tool5Component} from "./tool5/tool5.component";
import {Tool6Component} from "./tool6/tool6.component";
import {Tool7Component} from "./tool7/tool7.component";
import {Tool8Component} from "./tool8/tool8.component";
import {Tool9Component} from "./tool9/tool9.component";
import {Tool10Component} from "./tool10/tool10.component";


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'tool1', component: Tool1Component},
  {path: 'tool2', component: Tool2Component},
  {path: 'tool3', component: Tool3Component},
  {path: 'tool4', component: Tool4Component},
  {path: 'tool5', component: Tool5Component},
  {path: 'tool6', component: Tool6Component},
  {path: 'tool7', component: Tool7Component},
  {path: 'tool8', component: Tool8Component},
  {path: 'tool9', component: Tool9Component},
  {path: 'tool10', component: Tool10Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
