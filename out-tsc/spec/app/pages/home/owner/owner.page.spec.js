import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OwnerPage } from './owner.page';
describe('OwnerPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OwnerPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OwnerPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=owner.page.spec.js.map