import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from '../../model/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItemModel[] = [
    {
      label: 'Configuration',
      path: '/configuration'
    },
    {
      label: 'APIs',
      path: '/api'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
