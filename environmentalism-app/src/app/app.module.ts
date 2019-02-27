import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecyclingComponent } from './recycling/recycling.component';
import { WCanDoComponent } from './what_you_can_do/wcando.component';

@NgModule({
  declarations: [
    AppComponent,
    RecyclingComponent, 
    WCanDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
