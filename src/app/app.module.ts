import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AncillaryProductsComponent } from './ancillary-products/ancillary-products.component';
import { AdminAncillaryComponent } from './admin-ancillary/admin-ancillary.component';
import { BoohingAncillaryComponent } from './boohing-ancillary/boohing-ancillary.component';
import { AncillaryLoginComponent } from './ancillary-login/ancillary-login.component';
import { LoginAncillaryHistoryComponent } from './login-ancillary-history/login-ancillary-history.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ManagerComponent,
    ManagerdashboardComponent,
    ContactComponent,
    AboutComponent,
    AncillaryProductsComponent,
    AdminAncillaryComponent,
    BoohingAncillaryComponent,
    AncillaryLoginComponent,
    LoginAncillaryHistoryComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
