import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  constructor(private http: HttpClient) { }


  get(): Observable<any> {
    return this.http.get('http://localhost:3000/users/getQuestions');
  }
  save(res): Observable<any> {
    console.log("Called");
    return this.http.post('http://localhost:3000/users/saveResponse',res);
  }

}
