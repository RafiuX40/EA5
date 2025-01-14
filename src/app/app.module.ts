import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';

@NgModule({
  declarations: [AppComponent, RegistroFormComponent],
  imports: [BrowserModule, IonicModule.forRoot(), ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
