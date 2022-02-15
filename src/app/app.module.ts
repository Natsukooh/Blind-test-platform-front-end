import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Homepage } from './homepage/homepage';
import {RouterModule, Routes} from "@angular/router";
import {AdminPageComponent} from "./adminpage/adminpage";

const routes: Routes =
[
  { path: 'home', component: Homepage },
  { path: 'admin', component: AdminPageComponent }
];

@NgModule({
  declarations: [
    Homepage,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [Homepage]
})
export class AppModule { }
