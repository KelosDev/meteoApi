import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { SunState, WeatherHour } from 'src/model/model'


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private httpClient: HttpClient) { }

    getMeteoApiUTC = (lat: string, lng: string) => {
        return this.httpClient.get(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=UTC&date=today`).pipe(map((res: any) => {
            const sunState: SunState = res.results
            return sunState

        }))
    }

    getMeteoApiForecast = (lng: string, lat: string) => {
        return this.httpClient.get(`https://www.7timer.info/bin/astro.php?lon=${lng}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`).pipe(map((res: any) => {
            const weather: WeatherHour[] = res.dataseries
            return weather

        }))
    }
}
