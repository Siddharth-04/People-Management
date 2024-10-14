import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../people.service'; 

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  editingPerson: Person | null = null;
  newPerson: Person = { name: '', age: 0, gender: '', mobile: '' }; 

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }


  addPerson(person: Person) {
    this.peopleService.addPerson(person).subscribe(newPerson => {
      this.people.push(newPerson);
      this.newPerson = { name: '', age: 0, gender: '', mobile: '' }; 
    });
  }

  editPerson(person: Person) {
    this.editingPerson = { ...person };
  }

  savePerson() {
    if (this.editingPerson) {
      this.peopleService.updatePerson(this.editingPerson.mobile, this.editingPerson).subscribe(() => {
        const index = this.people.findIndex(p => p.mobile === this.editingPerson!.mobile);
        if (index !== -1) {
          this.people[index] = this.editingPerson!;
        }
        this.editingPerson = null; 
      });
    }
  }

  deletePerson(mobile: string) {
    this.peopleService.deletePerson(mobile).subscribe(() => {
      this.people = this.people.filter(p => p.mobile !== mobile);
    });
  }

  cancelEdit() {
    this.editingPerson = null;
  }
}
