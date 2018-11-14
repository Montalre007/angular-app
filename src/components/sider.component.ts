import {Component} from '@angular/core';

@Component({
  selector: 'sider',
  template: `
    <ul nz-menu [nzMode]="'inline'" style="height:100%">
      <li nz-submenu [nzOpen]="true">
        <span title><i nz-icon type="user"></i>主菜单</span>
        <ul>
          <li nz-menu-item [routerLink]="['/home']">首页</li>
          <li nz-menu-item routerLink="product">产品</li>
        </ul>
      </li>
    </ul>
  `
})
export class SiderComponent { }
