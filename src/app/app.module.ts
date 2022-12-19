import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ContacteditComponent } from './contactedit/contactedit.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    CreatecontactComponent,
    ContacteditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
