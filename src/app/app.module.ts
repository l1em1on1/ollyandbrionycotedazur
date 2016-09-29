import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ContainerComponent } from './container.component';
import { HomeSectionComponent, GettingThereSectionComponent, AccomodationSectionComponent, LocalAreaSectionComponent, MainEventSectionComponent, OtherFestivitiesSectionComponent, RSVPSectionComponent }  from './section.components';

import { RSVPService } from './services/rsvp.service';

import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, routing ],
  declarations: [ ContainerComponent, HomeSectionComponent, GettingThereSectionComponent, AccomodationSectionComponent, LocalAreaSectionComponent, MainEventSectionComponent, OtherFestivitiesSectionComponent, RSVPSectionComponent ],
  providers: [ RSVPService ],
  bootstrap: [ ContainerComponent ]
})
export class AppModule { }