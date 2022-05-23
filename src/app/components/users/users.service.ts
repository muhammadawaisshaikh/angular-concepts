import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint: string = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    let options = {};

    return this.http.get(this.endpoint, options)
  }

  getUser(id: number) {
    let options = {};

    return this.http.get(`${this.endpoint}/${id}`, options)
  }

  createUser(data: any) {
    let options = {};

    return this.http.post(this.endpoint, data, options)
  }

  updateUser(id: number, data: any) {
    let options = {};

    return this.http.put(`${this.endpoint}/${id}`, data, options)
  }

  deleteUser(id: number) {
    let options = {};

    return this.http.delete(`${this.endpoint}/${id}`, options)
  }
}
