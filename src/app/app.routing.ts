import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sections } from './app.sections';

const appRoutes: Routes = [];

Sections.forEach(section => {
    appRoutes.push({
        path: section.path, component: section.component, data: { title: section.title }
    })
});

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);