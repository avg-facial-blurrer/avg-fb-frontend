import { Injectable } from '@angular/core';
import { Actions } from '../domain/Actions';
import { Child } from '../domain/Child';
import { Group } from '../domain/Group';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private currentAction = new Subject<Actions>();
  public currentAction$ = this.currentAction.asObservable();
  private currentChild = new Subject<Child>();
  public currentChild$ = this.currentChild.asObservable();
  private currentGroup = new Subject<Group>();
  public currentGroup$ = this.currentGroup.asObservable();

  constructor() { }

  public setCurrentAction(action: Actions): void {
    this.currentAction.next(action);
  }

  public setCurrentChild(child: Child): void {
    this.currentChild.next(child);
  }

  public setCurrentGroup(group: Group): void {
    this.currentGroup.next(group);
  }
}
