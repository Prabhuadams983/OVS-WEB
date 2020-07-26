import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LocationTabComponent } from './admin/location-tab/location-tab.component';
import { CandidateTabComponent } from './admin/candidate-tab/candidate-tab.component';
import { UserTabComponent } from './admin/user-tab/user-tab.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminServiceService } from './services/adminService/admin-service.service';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    LocationTabComponent,
    CandidateTabComponent,
    UserTabComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
