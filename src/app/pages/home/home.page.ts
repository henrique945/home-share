import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ],
})
export class HomePage implements OnInit {

  constructor(
      private readonly userService: UserService,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    await this.userService.getMyInfo();
  }

}
