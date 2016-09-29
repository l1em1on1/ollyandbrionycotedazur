import { HomeSectionComponent, GettingThereSectionComponent, AccomodationSectionComponent, LocalAreaSectionComponent, MainEventSectionComponent, OtherFestivitiesSectionComponent, RSVPSectionComponent }  from './section.components';
import { Section } from "./models/section";

export const Sections: Section[] = [
    {
        path: '',
        component: HomeSectionComponent,
        title: 'Home'
    },
    {
        path: 'getting-there',
        component: GettingThereSectionComponent,
        title: 'Getting There'
    },
    {
        path: 'accommodation', 
        component: AccomodationSectionComponent,
        title: 'Accommodation'
    },
    {
        path: 'local-area', 
        component: LocalAreaSectionComponent,
        title: 'Local Area'
    },
    {
        path: 'main-event', 
        component: MainEventSectionComponent,
        title: 'The Main Event'
    },
    {
        path: 'other-festivities', 
        component: OtherFestivitiesSectionComponent,
        title: 'Other Festivities'
    },
    {
        path: 'rsvp', 
        component: RSVPSectionComponent,
        title: 'RSVP'
    }
];


