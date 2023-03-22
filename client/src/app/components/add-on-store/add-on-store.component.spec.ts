import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnStoreComponent } from './add-on-store.component';

describe('AddOnStoreComponent', () => {
  let component: AddOnStoreComponent;
  let fixture: ComponentFixture<AddOnStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
