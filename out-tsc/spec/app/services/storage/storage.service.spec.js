import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
describe('StorageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(StorageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=storage.service.spec.js.map