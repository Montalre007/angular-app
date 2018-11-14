import { Component, OnInit, ViewChild } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CodeComponent} from '../../components/code.component';
import {Router} from '@angular/router';
import {utils} from '../../plugin/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild (CodeComponent) child: CodeComponent;
  username = 'admin';
  password = 'admin';
  code = '';
  codeNum: any;
  constructor(private message: NzMessageService, private router: Router) { }
  getCodeNum = (codeNum: any) => {
    this.codeNum = codeNum;
  }
  SignIn = () => {
    if (this.username === '') {
      this.message.warning('用户名不能为空');
    } else if (this.password === '') {
      this.message.warning('密码不能为空');
    } else if (this.code === '') {
      this.message.warning('验证码不能为空');
    } else if (this.code.toUpperCase() !== this.codeNum) {
      this.message.warning('验证码有误');
      this.child.getCode();
    } else {
      const userInfo = {
        username: this.username
      }
      utils.setSessionStorage('userInfo', userInfo);
      this.router.navigateByUrl('home');
    }
  }
  ngOnInit() {
    window.onkeyup = (event) => {
      if (event.keyCode && (event.keyCode === 13 || event.keyCode === 108)) {
        this.SignIn();
      }
    };
  }

}
