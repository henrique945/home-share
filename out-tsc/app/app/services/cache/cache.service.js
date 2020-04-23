import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CacheService = class CacheService {
    constructor() {
        this.myMap = new Map();
    }
    setMap(key, value) {
        this.myMap.set(key, value);
    }
    getMap(key) {
        return this.myMap.get(key);
    }
};
CacheService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CacheService);
export { CacheService };
//# sourceMappingURL=cache.service.js.map