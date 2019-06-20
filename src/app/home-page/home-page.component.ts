import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public heroHeading: string;
  public heroText: string;
  public heroBtnText : string;
  public heroBtnUrl: string;
  public heroSecondHeading: string;
  public accomodationHeading: string;
  public accomodationText: string;
  public transpHeading: string;
  public transpText: string;
  public agentHeading: string;
  public agentText: string;
  public tripHeading: string;
  public tripText: string;

  constructor() { 
  this.heroHeading = "Data Collection";
  this.heroText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  this.heroBtnText = "Learn More";
  this.heroBtnUrl = "#";
  this.heroSecondHeading = "Collecting Your Data";
  this.accomodationHeading = "Your Location";
  this.accomodationText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  this.transpHeading = "Your Mobile Number";
  this.transpText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  this.agentHeading = "Your Name";
  this.agentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  this.tripHeading = "Your Email";
  this.tripText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  }


  ngOnInit() {
  }

}
