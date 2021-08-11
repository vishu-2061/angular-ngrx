import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
    declarations: [
      ReactiveFormComponent,
      TemplateDrivenFormComponent
    ],
    imports: [
      BrowserModule,
      FormsRoutingModule
    ],
    providers: []
  })
  export class ObservableManagerModule { }