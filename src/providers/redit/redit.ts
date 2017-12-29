import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx' ;
/*
  Generated class for the ReditProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReditProvider {
http:any;
baseUrl:String;

  constructor(http: Http) {
    console.log('Hello ReditProvider Provider');
    this.http = http;
    this.baseUrl = 'https://www.reddit.com/r';
    
  }

  getPosts(category , limit){
    return this.http.get(this.baseUrl+'/'+category+'/'+'top.json?limit='+limit)
    .map(res =>res.json());
  }

}
