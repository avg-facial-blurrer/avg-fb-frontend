import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Child} from '../domain/Child';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:8080/blackpool_backend_war_exploded/Child';
const HEADERS = new HttpHeaders().set('Content-Type', 'application/json');


@Injectable()
export class ChildService {
  constructor(private httpClient: HttpClient) {
  }

  public async getChildById(id: number): Promise<Observable<Child>> {
    const url = BASE_URL + '/get/' + id;
    return await this.httpClient.get<Child>(url, {headers: HEADERS});
  }

  public updateChild(id: number, firstName: string, lastName: string): Observable<any> {
    const url = BASE_URL + '/updateChild';
    console.log(url);
    const child = new Child();
    child.id = id;
    child.firstName = firstName;
    child.lastName = lastName;
    return this.httpClient.put(url, child, {headers: HEADERS});
  }

  public async deleteChild(id: number): Promise<any> {
    const url = BASE_URL + '/DeleteChild/' + id;
    await this.httpClient.delete(url);
  }

  public getChildInClass(classId: number) {

  }
}
