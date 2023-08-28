import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/view/login/login.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './modules/utils/spinner/spinner.component';
import { HomeComponent } from './modules/home/view/home/home.component';
import { SidebarComponent } from './modules/home/view/sidebar/sidebar.component';
import { FooterComponent } from './modules/home/view/footer/footer.component';
import { ProductDetailComponent } from './modules/home/view/product-detail/product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }