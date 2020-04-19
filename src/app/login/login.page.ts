import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changePos(container){
    container.classList.add("right-panel-active");
  };

  changePoss(container){
    container.classList.remove("right-panel-active");
  };

}
