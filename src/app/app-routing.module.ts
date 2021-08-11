import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FormsComponent } from './forms/forms.component';
import { ObservableComponent } from './observable/observable.component';


// sets up routes constant where you define your routes

const routes: Routes = [
    { path: 'observable', component: ObservableComponent },
    { path: 'forms', component: FormsComponent }
    // { path: 'promise', component: PromiseComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }