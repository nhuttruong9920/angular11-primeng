import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showUsername =
    localStorage.getItem('showUsername') === 'true' ? true : false || false;
  handleShowUsername() {
    localStorage.setItem('showUsername', JSON.stringify(this.showUsername));
  }
}
