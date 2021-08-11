import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


// sets up routes constant where you define your routes

const routes: Routes = [
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    // { path: 'promise', component: PromiseComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }