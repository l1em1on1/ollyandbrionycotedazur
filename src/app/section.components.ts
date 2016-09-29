import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { RSVPEntry } from "./models/rsvp.entry";
import { Observable } from "rxjs";
import { RSVPService } from "./services/rsvp.service";

@Component({
    templateUrl: "../sections/home.html"
})
export class HomeSectionComponent {}

@Component({
    templateUrl: "../sections/getting-there.html"
})
export class GettingThereSectionComponent {}

@Component({
    templateUrl: "../sections/accommodation.html"
})
export class AccomodationSectionComponent {}

@Component({
    templateUrl: "../sections/local-area.html"
})
export class LocalAreaSectionComponent {}

@Component({
    templateUrl: "../sections/main-event.html"
})
export class MainEventSectionComponent {}

@Component({
    templateUrl: "../sections/other-festivities.html"
})
export class OtherFestivitiesSectionComponent {}

@Component({
    templateUrl: "../sections/rsvp.html"
})
export class RSVPSectionComponent {
    rsvpList: RSVPEntry[];

    constructor(private rsvpService: RSVPService) {
       this.rsvpService.getList().subscribe(list => this.rsvpList = list);
    }
 }