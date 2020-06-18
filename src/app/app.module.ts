import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule, InputsModule } from 'angular-bootstrap-md';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { HomeComponent } from './home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AccessapComponent } from './accessap/accessap.component';
import { Job1Component } from './job1/job1.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideNavComponent,
    FooterComponent,
    AboutComponent,
    ContactsComponent,
    AdminpanelComponent,
    HomeComponent,
    AccessapComponent,
    Job1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    NavbarModule,
    WavesModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    ButtonsModule,
    IconsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    InputsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
