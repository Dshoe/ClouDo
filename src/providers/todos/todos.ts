import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosProvider {

  db: any;

  constructor(public http: Http) {
    this.db = new PouchDB('cloudo');
  }

}
