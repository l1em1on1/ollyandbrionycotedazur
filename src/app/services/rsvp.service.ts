import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RSVPEntry } from '../models/rsvp.entry';
import { Observable } from 'rxjs/RX'
import 'rxjs/add/operator/map';

@Injectable()
export class RSVPService {
    constructor(private http: Http) { }

    private parseResponse(response: Object[]): RSVPEntry[] {
        var parsedResponse: RSVPEntry[] = [];

        for (let index = 0; index < response.length; index++) {
            parsedResponse.push({
                name: response[index]['name'],
                contact: response[index]['contact'],
                isAttending: response[index]['attending'] == 'yes',
                isAttendingOnFriday: response[index]['attending_friday'] == 'yes',
                needCoachOnFriday: response[index]['coach_friday'] == 'yes',
                needCoach: response[index]['coach'] == 'yes',
                vegetarian: response[index]['vegetarian'] == 'yes',
                childrenDietInfo: response[index]['children_diet_info'],
                songInfo: response[index]['song_info'],
                moreInfo: response[index]['more_info']
            });
            
        }

        return parsedResponse;
    }

    getList(): Observable<RSVPEntry[]> {
        return this.http.get("/assets/rsvp.json")
            .map(response => this.parseResponse(response.json()));
    }
}

