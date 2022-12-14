import { Component, OnInit } from '@angular/core';
import { homeInputs } from 'src/model/model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jsonIn: homeInputs = {
    lat: '',
    lng: ''
  }

  featureLocation = {
    loc: 'Turin',
    lat: '45.0425',
    lng: '7.4032',
    icon: ''
  }


  defaultLocationCoords = [
    {
      loc: 'Turin',
      lat: '45.0425',
      lng: '7.4032',
      icon: ''
    },
    {

      loc: 'Roma',
      lat: '41.9027',
      lng: '12.4963',
      icon: ''
    },
    {
      loc: 'Cagliari',
      lat: '39.2238',
      lng: '9.1266',
      icon: ''
    },
    {
      loc: 'Bologna',
      lat: '44.2938',
      lng: '11.2034',
      icon: ''
    },
    {
      loc: 'Firenze',
      lat: '43.7695',
      lng: '11.2558',
      icon: ''
    }]


  constructor() { }

  ngOnInit(): void {
  }

}
