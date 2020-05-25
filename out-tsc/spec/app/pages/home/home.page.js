import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
let HomePage = class HomePage {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.userService.getMyInfo();
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UserService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map