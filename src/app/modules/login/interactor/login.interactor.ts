import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginInteractor {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const url = 'https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login';
        const requestData = {
            user: username,
            password: password
        };

        return this.http.post(url, requestData);
    }
}