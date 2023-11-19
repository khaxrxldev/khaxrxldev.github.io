import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { BlankComponent } from './pages/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent
  }, {
    path: 'blank',
    component: BlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
