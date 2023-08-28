import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeInteractor {

  constructor(private http: HttpClient) { }

  getProducts(userToken: string): Observable<any> {
    console.log("token que llega al interactor: ", userToken);
    const url = 'https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/getproducts';
    const body = {
      userToken: userToken
    };

    return this.http.post(url,body);
}
}