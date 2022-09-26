import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { AddServiceFormComponent } from './add-service-form/add-service-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingtableComponent } from './bookingtable/bookingtable.component';
import { BookingtablereportComponent } from './bookingtablereport/bookingtablereport.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAdminUserComponent } from './add-admin-user/add-admin-user.component';
import { UsertableComponent } from './usertable/usertable.component';
import { PersonasComponent } from './personas/personas.component';
import { AddformuserComponent } from './personas/addformuser.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiciobienestarComponent } from './serviciobienestar/serviciobienestar.component';
import { AddserviceComponent } from './serviciobienestar/addservice.component';
import { ServicetableComponent } from './servicetable/servicetable.component';

const routes: Routes = [
  {path: 'sidebar', component:SidebarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'card', component:ServiceCardComponent},
  {path: 'addservice', component:AddserviceComponent},
  {path: 'table', component:BookingtableComponent},
  {path: 'tablereport', component:BookingtablereportComponent},
  {path: 'addformuser', component:AddAdminUserComponent},
  {path: 'usertable', component:UsertableComponent},
  {path: 'adduser', component:AddformuserComponent},
  {path: 'servicetable', component:ServicetableComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ServiceCardComponent,
    AddServiceFormComponent,
    NavbarComponent,
    BookingtableComponent,
    BookingtablereportComponent,
    AddAdminUserComponent,
    UsertableComponent,
    PersonasComponent,
    AddformuserComponent,
   ServiciobienestarComponent,
    AddserviceComponent,
    ServicetableComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddServiceFormComponent]
})
export class AppModule { }
