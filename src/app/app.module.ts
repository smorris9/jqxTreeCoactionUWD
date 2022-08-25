import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    jqxGridModule,
    jqxExpanderModule,
    jqxTreeModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
