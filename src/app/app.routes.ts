import {Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";

export const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: '', redirectTo: 'main-page', pathMatch: 'full'}];
