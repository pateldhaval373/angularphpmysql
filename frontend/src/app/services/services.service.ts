import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import {User} from '../Model/user';
import { ApiResponse } from '../Model/api-response';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  baseUrl ='http://localhost/AngularLoginRegister';

  login(loginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
  }
 
  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/getById.php?id=' + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/delete.php?id=' + id);
  }

  updateStudent(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/update.php', user);
  }
}
