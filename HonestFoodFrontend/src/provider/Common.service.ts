import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class CommonService {
    constructor(private httpClient: HttpClient) {}

    getOutlets(address): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}outlet?address=${address}`);
    }
}
