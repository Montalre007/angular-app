import {Component, OnInit} from '@angular/core';
import {utils} from '../plugin/utils';

@Component({
  selector: 'header',
  template: `
    <nz-header>
      <div class="logo"></div>
      <ul nz-menu [nzTheme]="'dark'" [nzMode]="'horizontal'" style="line-height: 64px;">
        <li nz-menu-item>nav 1</li>
        <li nz-menu-item>nav 2</li>
        <li nz-menu-item>nav 3</li>
      </ul>
      <nz-dropdown class="user" nzPlacement="bottomCenter" *ngIf="userInfo">
        <a nz-dropdown>
          {{userInfo.username}}<i nz-icon type="down"></i>
        </a>
        <ul nz-menu nzSelectable>
          <li nz-menu-item>
            <a nz-popconfirm nzTitle="确认要退出？" (nzOnConfirm)="confirm()" (nzOnCancel)="cancel()">退出</a>
          </li>
        </ul>
      </nz-dropdown>
    </nz-header>
  `,
  styles: [`
    .logo{
      width: 120px;
      height: 31px;
      background: rgba(255,255,255,.2);
      margin: 16px 28px 16px 0;
      float: left;
    }
    .user{
      position: absolute;
      top: 0;
      right: 20px;
    }
  `]
})

export class HeaderComponent implements OnInit {
  userInfo: any;
  cancel = () => {
    return;
  }
  confirm = () => {
    utils.removeSessionStorage('userInfo');
    window.location.href = '/';
  }
  ngOnInit () {
    if (utils.getSessionStorage('userInfo')) {
     this.userInfo = utils.getSessionStorage('userInfo');
    }
  }
}
