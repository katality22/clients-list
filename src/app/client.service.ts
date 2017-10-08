import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Client } from './client';

@Injectable()
export class ClientService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private clientsUrl = 'api/clients';  // URL to web api

  constructor(private http: Http) { }

  getClients(): Promise<Client[]> {
    return this.http.get(this.clientsUrl)
               .toPromise()
               .then(response => response.json().data as Client[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

