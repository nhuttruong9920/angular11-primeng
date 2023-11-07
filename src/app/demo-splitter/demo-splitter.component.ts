import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SplitAreaDirective, SplitComponent } from 'angular-split';
enum rightBarState {
  normal = 'normal',
  collapsed = 'collapsed',
  expanded = 'expanded',
}
@Component({
  selector: 'app-demo-splitter',
  templateUrl: './demo-splitter.component.html',
  styleUrls: ['./demo-splitter.component.css'],
})
export class DemoSplitterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild(SplitComponent) splitEl!: SplitComponent;
  @ViewChildren(SplitAreaDirective) areasEl!: QueryList<SplitAreaDirective>;
  leftOpened=true;
  isLeftSideOpened = true;
  rightBarState = 'normal';
  onRight() {
    if (this.rightBarState === rightBarState.expanded) {
      this.isLeftSideOpened = !this.isLeftSideOpened;
      this.rightBarState = 'normal';
    } else {
      this.areasEl.last.collapse(0);
      this.rightBarState = 'collapsed';
    }
  }
  onLeft() {
    if (this.rightBarState === rightBarState.normal) {
      this.isLeftSideOpened = !this.isLeftSideOpened;
      this.rightBarState = 'expanded';
    } else {
      this.areasEl.last.collapse(30);
      this.rightBarState = 'normal';
    }
  }

  dragEndPixel(e: any) {
    const rightBarSize = e.sizes[1];
    if (rightBarSize === 0) {
      this.rightBarState = 'collapsed';
    } else {
      this.rightBarState = 'normal';
    }
  }

  
}
