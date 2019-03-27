import {Component, Input, OnInit} from '@angular/core';
import {ChildService} from '../services/child.service';
import {Child} from '../domain/Child';
import { StateService } from '../services/state.service';
import { Actions } from '../domain/Actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() child: Child;
  loading: boolean;

  constructor(private childService: ChildService, private stateService: StateService) { }

  ngOnInit() {
    // this.loading = true;
    // this.childService.getChildById(1).then(ob => ob.subscribe(child => this.setChild(child), err => console.log(err)));
  }

  public back(): void {
    this.stateService.setCurrentChild(null);
    this.stateService.setCurrentAction(Actions.Home);
  }

  private setChild(child: Child): void {
    console.log(child.firstName);
    this.child = child;
    this.loading = false;
  }

  public updateChild(firstName: string, lastName: string) {
    console.log('update');
    this.childService.updateChild(this.child.id, firstName, lastName).subscribe(next => {
      this.child.firstName = firstName , this.child.lastName = lastName; }, err => {console.log(err); });
  }

  public deleteChild(): void {
    console.log('delete');
    this.childService.deleteChild(this.child.id).then(() => {this.child = undefined; }, err => console.log(err));
  }
}
