import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../domain/Group';
import { AllGroupsResponse } from '../services/dto/AllGroupsResponse';
import {GroupResponse} from './dto/GroupResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private readonly URL_BASE = 'http://localhost:8080/Group';
  private readonly HEADERS: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }

  public async getAllClasses(): Promise<Group[]> {
    const groups = [];
    await this.httpClient.get<AllGroupsResponse>(this.URL_BASE + '/getAll', {headers: this.HEADERS}).subscribe((data) => {
      if (data != null) {
        Array.from(data.groupDTOList).forEach(x => groups.push(new Group(x.id, x.groupName, x.children)));
        console.log(data);
      }
    }, (error) => {
    });
    return groups;
  }

  public async getClassById(id: number): Promise<Observable<GroupResponse>> {
    const url = this.URL_BASE + '/get/' + id;
    return await this.httpClient.get<GroupResponse>(url, {headers: this.HEADERS});
  }
}
