import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
      tests:any[];
 
  constructor(){
    this.tests = [
      {name: 'Black' , selected : false},
      {name: 'Blue'  , selected : false},
      {name: 'Red'  , selected : false} 
    ]
  }

  submitCheck(){
   console.log(this.tests);
   let checked = this.tests.filter(c => c.selected);
   console.log(checked);
  }
}
