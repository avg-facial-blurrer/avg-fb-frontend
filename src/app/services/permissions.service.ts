import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Permissions} from '../domain/Permissions';
import {AllPermissionDTO} from './dto/AllPermissionDTO';

const BASE_URL = 'http://localhost:8080/Permissions';
const HEADERS = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private httpClient: HttpClient) { }

  public async getPersmissionsById(id: number): Promise<Observable<Permissions>> {
    const url = BASE_URL + '/get/' + id;
    return await this.httpClient.get<Permissions>(url, {headers: HEADERS});
  }

  public async getAllPermissions(): Promise<Observable<AllPermissionDTO>> {
    const url = BASE_URL + '/getAll';
    return await this.httpClient.get<AllPermissionDTO>(url, {headers: HEADERS});
  }

  public createPermissions(id: number, socialMedia: boolean, enclosed: boolean, schoolPaper: boolean): Observable<any> {
    const url = BASE_URL + '/addPermissions';
    const permissions = new Permissions();
    permissions.id = id;
    permissions.socialMediaPermission = socialMedia;
    permissions.enclosedEnvironmentPermission = enclosed;
    permissions.schoolPaperPermission = schoolPaper;
    return this.httpClient.post(url, permissions, {headers: HEADERS});
  }

  public updatePermissions(id: number, socialMedia: boolean, enclosed: boolean, schoolPaper: boolean): Observable<any> {
    const url = BASE_URL + '/updatePermissions';
    const permissions = new Permissions();
    permissions.id = id;
    permissions.socialMediaPermission = socialMedia;
    permissions.enclosedEnvironmentPermission = enclosed;
    permissions.schoolPaperPermission = schoolPaper;
    return this.httpClient.put(url, permissions, {headers: HEADERS});

  }

  public deletePermissions(id: number): Observable<any> {
    const url = BASE_URL + '/deletePermission/' + id;
    return this.httpClient.delete(url);
  }
}
