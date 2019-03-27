import { Component, OnInit } from '@angular/core';
import { Group } from '../domain/Group';
import { GroupService } from '../services/group.service';
import { Child } from '../domain/Child';
import { StateService } from '../services/state.service';
import { Actions } from '../domain/Actions';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  private groups: Group[] = [];
  public selectedGroup: Group = null;

  constructor(private _groupService: GroupService, private _stateService: StateService) {}

  ngOnInit() {
    this._stateService.currentGroup$.subscribe(group => {
      this.selectedGroup = group;
    });
    this._groupService.getAllClasses().then((groups) => { this.groups = groups; });
  }

  public getGroups(): Group[] {
    return this.groups;
  }

  public loadClassDetails(id: number): void {
    this.groups.forEach(x => { if (id === x.getId()) { this._stateService.setCurrentGroup(x); } });
  }

  public setCurrentChild(child: Child): void {
    this._stateService.setCurrentChild(child);
    this._stateService.setCurrentAction(Actions.Child);
  }
}
