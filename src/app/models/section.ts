import { Type } from '@angular/core';

export interface Section {
    title: string;
    path: string;
    component: Type<any>
}