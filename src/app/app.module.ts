import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatCardModule, MatRadioModule, MatTableModule, MatCheckboxModule, MatSnackBarModule, MatMenuModule, MatSelectModule, MatOptionModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { LoginComponent } from './user/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FlightListComponent } from './user/flight-list/flight-list.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';

import { SearchListComponent } from './user/search-list/search-list.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { CityComponent } from './admin/city/city.component';
import { AirlineComponent } from './admin/airline/airline.component';

import { AddnewflightComponent } from './admin/addnewflight/addnewflight.component';
import { FilterComponent } from './user/filter/filter.component';
import { AdminFlightlistComponent } from './admin/admin-flightlist/admin-flightlist.component';
import { ReviewBookingComponent } from './user/review-booking/review-booking.component';
import { RoundtripFooterComponent } from './user/roundtrip-footer/roundtrip-footer.component';
import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { EditComponent } from './admin/edit/edit.component';

import { PassengerDetailsComponent } from './user/passenger-details/passenger-details.component';
import { CityViewComponent } from './admin/city-view/city-view.component';
import { CitydataService } from './service/citydata.service';
import { EditairlineComponent } from './admin/editairline/editairline.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminhomeComponent,
    FooterComponent,
    SearchFlightsComponent,
    ProfileComponent,
    FlightListComponent,
    ViewProfileComponent,
    SearchListComponent,
    RegistrationComponent,
    CityComponent,
    AirlineComponent,
    AddnewflightComponent,
    ViewProfileComponent,
    SearchListComponent,
    RegistrationComponent,
    AddnewflightComponent,
    FilterComponent,
    AdminFlightlistComponent,
    ReviewBookingComponent,
    RoundtripFooterComponent,
    LoginComponent,
    FilterComponent,
    AirlinelistcomponentComponent,
    ScheduleComponent,
    EditComponent,
    PassengerDetailsComponent,
    CityViewComponent,
    EditairlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CitydataService],
  bootstrap: [AppComponent]

})
export class AppModule { }
