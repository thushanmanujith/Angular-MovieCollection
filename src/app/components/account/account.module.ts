import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ]
})
export class AccountModule { }
