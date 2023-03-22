import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddOnsComponent } from './my-add-ons.component';

describe('MyAddOnsComponent', () => {
  let component: MyAddOnsComponent;
  let fixture: ComponentFixture<MyAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAddOnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
