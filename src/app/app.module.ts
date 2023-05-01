import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    jqxTabsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
