import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ModalMessageComponent } from './modal-message.component';
describe('ModalMessageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalMessageComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ModalMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-message.component.spec.js.map