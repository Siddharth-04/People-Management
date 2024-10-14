import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  name: string;
  age: number;
  gender: string;
  mobile: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://localhost:4000/person';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  updatePerson(mobile: string, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${mobile}`, person);
  }

  deletePerson(mobile: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${mobile}`);
  }
}
