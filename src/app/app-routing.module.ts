import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { PeopleListComponent } from './people/people-list/people-list.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'people', component:PeopleListComponent},
  {path: 'people/detail/:id', component:PeopleDetailComponent},
  {path: '**', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
