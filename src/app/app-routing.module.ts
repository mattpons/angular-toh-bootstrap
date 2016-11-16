import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent }   from './dashboard.component';
import { HeroListComponent }      from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  //{ path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroListComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
