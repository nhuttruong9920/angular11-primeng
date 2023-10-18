import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-outside-menu',
  templateUrl: './click-outside-menu.component.html',
  styleUrls: ['./click-outside-menu.component.css'],
})
export class ClickOutsideMenuComponent implements OnInit {
  selectedFontSize: string = '18px';
  isFontSizeMenuOpened: boolean = false;
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  toggleFontSizeMenu(event: Event) {
    this.isFontSizeMenuOpened = !this.isFontSizeMenuOpened;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isFontSizeMenuOpened = false;
    }
  }
}
