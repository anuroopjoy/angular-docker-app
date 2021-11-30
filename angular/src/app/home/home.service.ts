import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getCities() {
    return lastValueFrom(this.http.get('http://localhost:3000/cities'));
  }
}
