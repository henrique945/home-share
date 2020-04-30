import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { TransactionService } from '../../services/transaction/transaction.service';
let HomePage = class HomePage {
    constructor(userService, transactionService) {
        this.userService = userService;
        this.transactionService = transactionService;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.userService.getMyInfo();
            yield this.transactionService.transactionCount(result.id);
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UserService,
        TransactionService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map