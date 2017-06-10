import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosProvider {

  db: any;
  remote: any;

  constructor(public http: Http) {
    this.db = new PouchDB('cloudo');

    this.remote = 'http://localhost:5984/cloudo';
  }

}
