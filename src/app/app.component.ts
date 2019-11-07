import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  status = true;

  resetName () {
    this.name = '';
  }

  checkName() {
    if( this.name === ''){
      this.status = true;
      return this.status;
    }
  }
}
