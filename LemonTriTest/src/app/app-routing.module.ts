import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'teammate',
    loadChildren: () => import('./teammate/teammate.module').then(m => m.TeammateModule)
  },
  {
    path: 'leader',
    loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule)
  },
  {
    path: '**', redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
