import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AncillaryProductsComponent } from './ancillary-products/ancillary-products.component';
import { AdminAncillaryComponent } from './admin-ancillary/admin-ancillary.component';
import { BoohingAncillaryComponent } from './boohing-ancillary/boohing-ancillary.component';
import { AncillaryLoginComponent } from './ancillary-login/ancillary-login.component';
import { LoginAncillaryHistoryComponent } from './login-ancillary-history/login-ancillary-history.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from './Shared/auth.guard';
import { RoleGuard } from './Shared/role.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path : 'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path : 'signup',component : SignupComponent},
 {path : 'admin',component:AdminComponent},
  {path : 'admin-login',component:AdminComponent,canActivate:[AuthGuard]},
{path : 'adminDashboard',component:AdmindashboardComponent,canActivate:[AuthGuard]},
  {path :'userDashborad', component:UserdashboardComponent},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard]},
  {path:'managerDashboard', component:ManagerdashboardComponent,canActivate:[AuthGuard]},
  {path:'ancillary-products',component:AncillaryProductsComponent},
  {path:'admin-ancillary',component:AdminAncillaryComponent},
  {path:'ancillary-bookings',component:BoohingAncillaryComponent},
  {path:'ancillary-login',component:AncillaryLoginComponent,canActivate:[AuthGuard]},
  {path:'ancillary-history-admin',component:LoginAncillaryHistoryComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
