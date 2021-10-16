import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(public httpClient:HttpClient) { }

  getparentJson()
  {
    return this.httpClient.get('./assets/parent.json')
  }
  getchildJson()
  {
    return this.httpClient.get('./assets/child.json')
  }
}
