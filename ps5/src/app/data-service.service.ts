import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  queryData(searchTerm: string) {
    return this.http.post('/api/query', { searchTerm });
  }
}


