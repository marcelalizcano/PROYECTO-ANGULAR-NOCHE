import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AvengersComponent } from "./components/avengers/avengers.component";
import { CaruselComponent } from "./components/carusel/carusel.component";

const APP_ROUTING: Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'avengers', component:AvengersComponent},
  {path: 'carusel', component:CaruselComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTING);

