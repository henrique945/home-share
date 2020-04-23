import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DropdownHomeComponent } from './dropdown-home.component';
describe('DropdownHomeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DropdownHomeComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DropdownHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dropdown-home.component.spec.js.map