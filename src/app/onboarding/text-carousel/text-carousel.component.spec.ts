import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCarouselComponent } from './text-carousel.component';

describe('TextCarouselComponent', () => {
  let component: TextCarouselComponent;
  let fixture: ComponentFixture<TextCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
