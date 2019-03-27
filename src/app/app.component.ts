import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';
import {Actions} from './domain/Actions';
import {StateService} from './services/state.service';
import {Child} from './domain/Child';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public action: Actions = Actions.Home;
  public child: Child = null;
  public token: string;

  constructor(private loginService: LoginService, private stateService: StateService) {
  }

  ngOnInit(): void {
    this.stateService.currentAction$.subscribe(action => {
      this.performAction(action);
      console.log('Action: ' + action);
    });

    this.stateService.currentChild$.subscribe(child => {
      this.child = child;
      console.log('Child: ' + child);
      console.log(this.action === 2 && child != null);
    });

    this.loginService.tokenReceived$.subscribe(token => {
      this.setToken(token);
    });
    this.loginService.verifyToken(localStorage.getItem('token'));
  }

  private setToken(token: string): void {
    this.token = token;
  }

  private logout(): void {
    this.loginService.logout(this.token);
  }

  public performAction(action: Actions): void {
    switch (action) {
      case Actions.Logout:
        this.logout();
        break;
    }
    this.action === action;
  }
}
