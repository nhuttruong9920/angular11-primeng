import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-primeng-panelmenu',
  templateUrl: './primeng-panelmenu.component.html',
  styleUrls: ['./primeng-panelmenu.component.css'],
})
export class PrimengPanelmenuComponent implements OnInit {
  constructor() {}
  items: MenuItem[] = [];
  ngOnInit() {
    if (true) {
      let menu = {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'Open new file',
            icon: 'pi pi-fw pi-external-link',
            styleClass: 'none',
          },
          {
            label: 'Create ',
            icon: 'pi pi-fw pi-pus',
            items: [
              {
                label: 'User',
                icon: 'pi pi-fw pi-user-plus',
                styleClass: 'abc none',
              },
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                styleClass: 'none',
              },
            ],
          },
          { label: 'Quit', icon: 'pi pi-fw pi-times', styleClass: 'none' },
        ],
      };
      this.items.push(menu);
    }
    if (true) {
      let menu = {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        styleClass: '',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash', styleClass: 'none' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh', styleClass: 'none' },
        ],
      };
      this.items.push(menu);
    }
  }
}
