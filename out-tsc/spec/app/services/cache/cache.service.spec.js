import { TestBed } from '@angular/core/testing';
import { CacheService } from './cache.service';
describe('CacheService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(CacheService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cache.service.spec.js.map