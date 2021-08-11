import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableRoutingModule } from './observable-routing.module';

@NgModule({
    declarations: [
      FilterComponent,
      PromiseComponent
    ],
    imports: [
      BrowserModule,
      ObservableRoutingModule
    ],
    providers: []
  })
  export class ObservableManagerModule { }