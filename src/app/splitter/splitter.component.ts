import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.css'],
})
export class SplitterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  panelSizes: number[] = [50, 50]; // Initial panel sizes

  changePanelRatio() {
    this.panelSizes = [20, 80]; // Set the panel ratio to 50/50
  }
}
