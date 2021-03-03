import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  public form = [
    { val: 'Room 1', isChecked: false, people: 10 },
    { val: 'Room 2', isChecked: false, people: 20},
    { val: 'Room 3', isChecked: false, people: 30},
    { val: 'Room 4', isChecked: false, people: 40}
  ];
  
}
