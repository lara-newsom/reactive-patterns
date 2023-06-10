import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCardViewComponent } from './product-view.component';

describe('ComboCardViewComponent', () => {
  let component: ComboCardViewComponent;
  let fixture: ComponentFixture<ComboCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
