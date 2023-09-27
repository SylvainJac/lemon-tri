import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWasteComponent } from './edit-waste.component';

describe('EditWasteComponent', () => {
  let component: EditWasteComponent;
  let fixture: ComponentFixture<EditWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
