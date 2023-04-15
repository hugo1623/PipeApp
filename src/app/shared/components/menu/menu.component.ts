import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public menuitems: MenuItem[] = [];

  ngOnInit() {
      this.menuitems = [
          { label: 'New', icon: 'pi pi-fw pi-plus',},
          { label: 'Delete', icon: 'pi pi-fw pi-trash'}
      ];
  }
}
