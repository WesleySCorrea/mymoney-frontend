import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BalanceChartComponent } from './components/balance-chart/balance-chart.component';
import { Chart, registerables } from 'chart.js';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');
import localePt from '@angular/common/locales/pt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BalanceChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }  // Definindo o locale para pt-BR
  ],    
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Chart.register(...registerables);
  }
}
