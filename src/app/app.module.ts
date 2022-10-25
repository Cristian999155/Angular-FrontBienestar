import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingtablereportComponent } from './bookingtablereport/bookingtablereport.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAdminUserComponent } from './add-admin-user/add-admin-user.component';
import { PersonasComponent } from './personas/personas.component';
import { AddformuserComponent } from './personas/addformuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiciobienestarComponent } from './serviciobienestar/serviciobienestar.component';
import { AddserviceComponent } from './serviciobienestar/addservice.component';
import { ServicetableComponent } from './serviciobienestar/servicetable/servicetable.component';
import { UsertableComponent } from './personas/usertable/usertable.component';
import { BookingComponent } from './booking/booking.component';
import { BookingtableComponent } from './booking/bookingtable/bookingtable.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ReservasComponent } from './reservas/reservas.component';
import { TablereportComponent } from './booking/tablereport/tablereport.component';
import { FilterPipe } from './booking/pipes/filter.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatePipe } from '@angular/common';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'sidebar', component:SidebarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'card', component:ServiceCardComponent},
  {path: 'addservice', component:AddserviceComponent},
  {path: 'tablereport', component:BookingtablereportComponent},
  {path: 'addformuser', component:AddAdminUserComponent},
  {path: 'usertable', component:UsertableComponent},
  {path: 'adduser', component:AddformuserComponent},
  {path: 'servicetable', component:ServicetableComponent},
  {path: 'addservice/:id', component:AddserviceComponent},
  {path: 'addservice/:id', component:AddserviceComponent},
  {path: 'bookingtable', component:BookingtableComponent},
  {path: 'bookingtable/:id', component:BookingtableComponent},
  {path: 'reporttable', component:TablereportComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ServiceCardComponent,
    NavbarComponent,
    BookingtablereportComponent,
    AddAdminUserComponent,
    UsertableComponent,
    PersonasComponent,
    AddformuserComponent,
   ServiciobienestarComponent,
    AddserviceComponent,
    ServicetableComponent,
    BookingComponent,
    BookingtableComponent,
    ReservasComponent,
    TablereportComponent,
    FilterPipe,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
   AuthModule.forRoot({
    domain: 'dev-893iyjiu.us.auth0.com',
    clientId: '2tKZym6uuNhzxj4Tb2DDDuA9LDYBrvgU'

  }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
