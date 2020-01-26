import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  { path: '', redirectTo: '/voting', pathMatch: 'full' },
  { path: 'voting', component: VotingComponent},
  { path: 'ranking', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
