import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FilterComponent } from './filter/filter.component';
import { PromiseComponent } from './promise/promise.component';


// sets up routes constant where you define your routes

const routes: Routes = [
    { path: 'filters', component: FilterComponent },
    { path: 'promise', component: PromiseComponent },
    // { path: 'promise', component: PromiseComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }