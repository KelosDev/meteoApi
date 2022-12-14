export interface homeInputs {
    lat: string,
    lng: string
}

export interface SunState {
    sunrise: string,
    sunset: string
}

export interface WeatherHour {
    timepoint: number,
    temp2m: number,
    prec_type: string
}

export interface AllData {
    sunState: SunState,
    weatherReport: WeatherHour[]
}
