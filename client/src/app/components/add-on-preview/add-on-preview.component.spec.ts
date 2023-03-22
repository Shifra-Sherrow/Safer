import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnPreviewComponent } from './add-on-preview.component';

describe('AddOnPreviewComponent', () => {
  let component: AddOnPreviewComponent;
  let fixture: ComponentFixture<AddOnPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
