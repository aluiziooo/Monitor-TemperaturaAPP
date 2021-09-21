import { BsModalService } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeComponent } from './cidade/cidade.component';
import {MatButtonModule} from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCidadeComponent } from './add-cidade/add-cidade.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { httpInterceptProviders } from './http-interceptors';
import { TemperaturasComponent } from './temperaturas/temperaturas.component';
import { GraficomaxComponent } from './graficomax/graficomax.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    AddCidadeComponent,
    SpinnerComponent,
    TemperaturasComponent,
    GraficomaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    TooltipModule.forRoot()
  ],
  providers: [httpInterceptProviders,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
