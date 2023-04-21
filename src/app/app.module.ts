import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// PrimeNg
import { SharedModule } from './shared/shared.module';

//Configuración del local de la App
import localeEsPE from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common'


registerLocaleData(localeEsPE);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
