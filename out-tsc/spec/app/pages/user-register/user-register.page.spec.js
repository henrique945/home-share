import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UserRegisterPage } from './user-register.page';
describe('UserRegisterPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserRegisterPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(UserRegisterPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-register.page.spec.js.map