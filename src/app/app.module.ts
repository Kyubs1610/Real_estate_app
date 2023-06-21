import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CookieService } from 'ngx-cookie-service';
import { NofoundComponent } from './components/nofound/nofound.component';
import { AuthModule } from './auth/auth.module';
import { ResetComponent } from './components/reset/reset.component';
import { FormsModule } from '@angular/forms';
import { buildingComponent } from './components/house/house.component';
import { MatMenuModule } from '@angular/material/menu';
import { EmailsentComponent } from './components/emailsent/emailsent.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule } from '@angular/material/dialog';
import { addformComponent } from './components/house/addbuilding/addform.component';
import { SnackBar } from './components/snackbar/snackbar.component';
import { UpdateFormComponent } from './components/house/update/updateform.component';
import { addRoomComponent } from './components/rooms/addRooms/add-rooms.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TenantinfoComponent } from './components/tenantinfo/tenantinfo.component';
import { HouseinfoComponent } from './components/house/houseinfo/houseinfo.component';
import { ContractComponent } from './components/contract/contract.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE  } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { TenantformComponent } from './components/tenantform/tenantform.component';
import { ConfirmDialogComponent } from './components/house/removebuilding/confirm-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomepageComponent,
    NofoundComponent,
    ResetComponent,
    buildingComponent,
    HeaderComponent,
    EmailsentComponent,
    addformComponent,
    UpdateFormComponent,
    addRoomComponent,
    TenantinfoComponent,
    HouseinfoComponent,
    ContractComponent,
    TenantComponent,
    TenantformComponent,
    ConfirmDialogComponent,
   
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    SnackBar,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    DatePipe,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } },
    CookieService,
    MatSnackBar,
    DatePipe,
    SnackBar,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOption,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
