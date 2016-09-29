import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContainerComponent } from './container.component';
import { HomeSectionComponent, GettingThereSectionComponent, AccomodationSectionComponent, LocalAreaSectionComponent, MainEventSectionComponent, OtherFestivitiesSectionComponent, RSVPSectionComponent }  from './section.components';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [ContainerComponent, HomeSectionComponent, GettingThereSectionComponent, AccomodationSectionComponent, LocalAreaSectionComponent, MainEventSectionComponent, OtherFestivitiesSectionComponent, RSVPSectionComponent ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }