import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  public findPeople(): Promise<Response>{
    return fetch("http://localhost:8080/persons")

  }
}
