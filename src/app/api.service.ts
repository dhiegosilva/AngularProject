import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL
  private apiUrl2 = 'https://www.strava.com/api/v3/clubs/978870/activities?page=1&per_page=200';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer a534291ae6f38a2eab9c95723de1919d60fa6f26'
    });

    return this.http.get<any>(`${this.apiUrl2}`, {headers});
  }
}


