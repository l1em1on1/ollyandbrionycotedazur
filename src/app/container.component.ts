import { Component } from '@angular/core';

import { Sections } from './app.sections';

@Component({
    selector: 'container',
    template: `
    <nav>
        <a *ngFor="let section of sections; trackBy: onNavigationClick" routerLink="{{section.path}}"><span>{{section.title}}</span></a>
    </nav>
    <div id="container" class="container">
        <router-outlet></router-outlet>
    </div>
    `
})
export class ContainerComponent {
    sections: Object[] = Sections;
}
