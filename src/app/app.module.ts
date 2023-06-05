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
import { TenantComponent } from './components/tenant/tenant.component';
import { MatMenuModule } from '@angular/material/menu';
import { EmailsentComponent } from './components/emailsent/emailsent.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule } from '@angular/material/dialog';
import { addformComponent } from './components/house/add/addform.component';
import { SnackBar } from './components/snackbar/snackbar.component';
import { UpdateFormComponent } from './components/house/update/updateform.component';
import { addRoomComponent } from './components/rooms/addRooms/add-rooms/add-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomepageComponent,
    NofoundComponent,
    ResetComponent,
    buildingComponent,
    TenantComponent,
    HeaderComponent,
    EmailsentComponent,
    addformComponent,
    UpdateFormComponent,
    addRoomComponent,
   
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
    
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
    CookieService, SnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
