import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ModalRegisterPropertyComponent } from './modal-register-property.component';
describe('ModalRegisterPropertyComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalRegisterPropertyComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ModalRegisterPropertyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-register-property.component.spec.js.map