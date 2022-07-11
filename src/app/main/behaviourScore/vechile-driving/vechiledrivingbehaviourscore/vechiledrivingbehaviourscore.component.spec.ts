import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechiledrivingbehaviourscoreComponent } from './vechiledrivingbehaviourscore.component';

describe('VechiledrivingbehaviourscoreComponent', () => {
  let component: VechiledrivingbehaviourscoreComponent;
  let fixture: ComponentFixture<VechiledrivingbehaviourscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechiledrivingbehaviourscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechiledrivingbehaviourscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
