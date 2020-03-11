import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public listOfPerson: object[];

  constructor(private service : PeopleService) { }

  ngOnInit(): void {
    //utiliser mon service
    this.service.findPeople()
    .then(response => response.json())
    //j'ai un array d'objets [{firstname:"fn", lastname:"ln"}...]
    .then(Response =>this.listOfPerson = Response)
  }

}
