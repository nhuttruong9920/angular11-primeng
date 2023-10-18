import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showUsername =
    localStorage.getItem('show Username') === 'true' ? true : false;
  ngDoCheck() {
    const storedShowUsername = localStorage.getItem('showUsername');
    if (storedShowUsername !== null) {
      this.showUsername = JSON.parse(storedShowUsername);
    }
  }
  onClick() {
    console.log(this.showUsername);
  }
}
