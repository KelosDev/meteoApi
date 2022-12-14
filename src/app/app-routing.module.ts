import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { MeteoComponent } from 'src/components/meteo/meteo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'meteo', component: MeteoComponent },
  {
    path: 'meteo/:lat/:lng',
    component: MeteoComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
