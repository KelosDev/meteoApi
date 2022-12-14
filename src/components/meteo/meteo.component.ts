import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SunState, WeatherHour } from 'src/model/model';
import { ApiService } from 'src/_service/api.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {


  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  lat2: string = this.route.snapshot.paramMap.get('lat')!
  lng2: string = this.route.snapshot.paramMap.get('lng')!

  sunriseAndSunset: SunState = { sunrise: '', sunset: '' }
  weather: WeatherHour[] = []

  ngOnInit(): void {
    const lat: string = this.route.snapshot.paramMap.get('lat')!
    const lng: string = this.route.snapshot.paramMap.get('lng')!

    this.apiService.getMeteoApiUTC(lat, lng)
      .subscribe((res: any) => {
        this.sunriseAndSunset = res
      })

    this.apiService.getMeteoApiForecast(lng, lat)
      .subscribe((res: any) => {
        this.weather = res
      })


  }

}
