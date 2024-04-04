import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordstrengthPipe } from './passwordstrength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PasswordstrengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
