import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BalanceResponse } from '../../models/home/balanceResponse';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:9090/v1';

  constructor(private http: HttpClient) {}

  getBalanceData(month: number, year: number): Observable<BalanceResponse> {
    const accessToken = localStorage.getItem('accessToken');
    const options  = {
    headers: new HttpHeaders({Authorization: `Bearer ${accessToken}`}),
    params: new HttpParams()
    .set('month', month)
    .set('year', year)
  };
  
    return this.http.get<BalanceResponse>(`${this.apiUrl}/launch/balance`, options);
  }
}
