import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeroLogoComponent } from './sub-hero-logo.component';

describe('SubHeroLogoComponent', () => {
  let component: SubHeroLogoComponent;
  let fixture: ComponentFixture<SubHeroLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeroLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHeroLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
