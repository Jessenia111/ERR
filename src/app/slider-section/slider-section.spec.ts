import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSection } from './slider-section';

describe('SliderSection', () => {
  let component: SliderSection;
  let fixture: ComponentFixture<SliderSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
