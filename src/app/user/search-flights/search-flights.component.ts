import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { CitydataService } from 'src/app/service/citydata.service';
import { ICity } from 'src/app/model/ICity';
import { Subscribable, Subscriber, Subscription, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  flightsArray: Array<IFlights>;
  from: Array<string>;
  to: Array<string>;
  cities: ICity[];
  roundcounter: boolean;
  ab:Array<string>
  today = new Date();
  currentDate = this.today.getDate();
  currentMonth = this.today.getMonth() + 1;
  currentYear = this.today.getFullYear();
  fullDate = this.currentYear + '-' + this.currentMonth + '-' + this.currentDate;
  endMonth = this.today.getMonth() + 3;
  fullEndDate = this.currentYear + '-' + this.endMonth + '-' + this.currentDate;
  Dp:string;
  Rd:string;
  selectedDetails = {
    fromCity: '',
    toCity: '',
    departureDate: null,
    returnDate: null,
    travellers: 1,
    class: 'Economy',
    tripType: 'One Way'
  };

  private validationMessages: { [key: string]: { [key: string]: string } };
  // private genericValidator: GenericValidator;
  startDate = this.fullDate;
  endDate = this.fullEndDate;
  sub: Subscription;
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private _flightService: FlightdataService, private _cityService: CitydataService, private route: ActivatedRoute) {
    /*this.validationMessages = {

    };
    */
  }

  ngOnInit() {
    //console.log("hello working");
    //console.log(this.today.getMonth());
    //console.log(this.fullDate);
    this.roundcounter = false;
    this._flightService.getFlightsData()
      .subscribe((fulldata: IFlights[]) => {
        this.flightsArray = fulldata;
      });

    this._cityService.getCityData().pipe(catchError((err)=> of([]) ))
      .subscribe((fulldata: ICity[]) => {
        this.cities = fulldata;
        this.to = this.cities.map(c => c.cityName);
        this.from = this.cities.map(c => c.cityName);
      //  console.log(this.to);
      });

    const today = new Date();
    /*const currentDate = today.getDate().toString;
    this.selectedDetails.departureDate = "" + currentDate;
    this.selectedDetails.returnDate = "" + currentDate;
    */
  }

    findFlights() {
    // tslint:disable-next-line: max-line-length
    if ((this.selectedDetails.fromCity === this.selectedDetails.toCity)) {
      alert('From and To Cities cannot be same');
    }
    else if(!this.validateDepartureDate())
    {
      alert('Departure date cannot be greater than Return date');
    }
     else {
      this.router.navigate(['/search', this.selectedDetails.toCity, this.selectedDetails.fromCity, this.roundcounter,this.selectedDetails.departureDate, this.selectedDetails.returnDate, this.selectedDetails.tripType, this.selectedDetails.travellers, this.selectedDetails.class, this.roundcounter]);
    }
    //console.log("ramneet");
    //console.log(this.selectedDetails.departureDate);
    /*if(this.selectedDetails.departureDate==this.selectedDetails.returnDate)
    {

    }
  */
  
  }

  getTripType() {
    if (this.roundcounter) {
      this.selectedDetails.tripType = 'Round Trip';
    } else {
      this.selectedDetails.tripType = 'One Way';
    }
   // console.log(this.selectedDetails.tripType);
  }

  getFromCity(e: any) {
    this.selectedDetails.fromCity = e.target.value;
  }

  getToCity = (e: any) => {
    this.selectedDetails.toCity = e.target.value;
  }

  getDepartureDate(e: any) {
    this.selectedDetails.departureDate=e.target.value;
     const s=e.target.value.split('-');
    this.Dp = s[2]+s[1]+s[0];
  }

  getReturnDate(e: any) {
    this.selectedDetails.returnDate=e.target.value;
    const s=e.target.value.split('-');
    this.Rd=s[2]+s[1]+s[0];
  }

  getTraveller(e: any) {
    this.selectedDetails.travellers = e.target.value;
  }

  getClass(e: any) {
    this.selectedDetails.class = e.target.value;
  }

  radioSetterOne() {
    this.roundcounter = false;
    this.getTripType();
  }

  radioSetterRound() {
    this.roundcounter = true;
    this.getTripType();
  }

  validateDepartureDate():boolean { 
    //console.log("naina");
    //console.log(typeof(this.selectedDetails.departureDate));
    //var d1=new (this.selectedDetails.departureDate);
    //var d2=new Date(this.selectedDetails.returnDate);
  const d1:number=parseInt(this.Dp);
  const d2:number=parseInt(this.Rd);
  if(d2<d1)
   {
     //alert("return date should be more than departure date");
     return false;
   }
   else 
   return true;
  }

    
  // addMonthsToDate(dt, n) {
  //   const dtt = dt.getMonth() + n;
  //   const endDate = new Date(dt.setMonth(dtt));
  //   this.endDate = '' + endDate.toString;
  // }
}
