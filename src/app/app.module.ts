import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HlcClrFormModule, InputErrorDisplayStrategy } from '@ng-holistic/clr-forms'

// CLARITY ICONS DEPENDENCY: THIS REQUIRED ONLY IN STACKBLITZ SEE #700
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
//


@NgModule({
  imports: [ BrowserModule, HttpClientModule,  HlcClrFormModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ 
        // This service manage how validation error is displayed
        // Default implementation is to display error when validating field is dirty
        // You can override this behavior by providing another implementation of this service   
        InputErrorDisplayStrategy
    ]
})
export class AppModule { }
