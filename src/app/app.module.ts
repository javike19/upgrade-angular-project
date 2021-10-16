import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { IntroComponent } from './body/intro/intro.component';
import { ProductComponent } from './body/product/product.component';
import { FormComponent } from './body/form/form.component';
import { NavComponent } from './body/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    IntroComponent,
    ProductComponent,
    FormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
