import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccupantComponent }      from './components/occupant/occupant.component';

const routes: Routes = [
  { path: 'occupant', component: OccupantComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
