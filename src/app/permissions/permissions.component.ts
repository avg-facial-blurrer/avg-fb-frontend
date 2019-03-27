import {Component, Input, OnInit} from '@angular/core';
import {Permissions} from '../domain/Permissions';
import {PermissionsService} from '../services/permissions.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  @Input() permissions: Permissions;
  @Input() childId: number;

  constructor(private permissionsService: PermissionsService) { }

  ngOnInit() {
    if (this.permissions === undefined) {
      this.permissions = new Permissions();
    }
  }

  public addPermissions() {
    this.permissionsService.createPermissions(this.childId, this.permissions.socialMediaPermission,
      this.permissions.enclosedEnvironmentPermission,
      this.permissions.enclosedEnvironmentPermission).subscribe(next => this.permissions.id = this.childId, err => console.log(err));
  }


  public updatePermissions() {
    this.permissionsService.updatePermissions(this.permissions.id, this.permissions.socialMediaPermission,
      this.permissions.enclosedEnvironmentPermission,
      this.permissions.schoolPaperPermission).subscribe(next => {}, err => console.log(err));
  }

  public deletePermissions() {
    this.permissionsService.deletePermissions(this.permissions.id)
      .subscribe(next => {this.permissions = new Permissions(); }, err => console.log(err));
  }





}
