import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: ['./plain.component.css'],
})
export class PlainComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  getURL() {
    console.log(window.location.href)
  };
}
