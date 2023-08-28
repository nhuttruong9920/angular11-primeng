import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.css']
})
export class DemoDialogComponent implements OnInit {

  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) { }

    ngOnInit(): void {

    }
        closeDialog() {
    this.ref.close();
  }

}
