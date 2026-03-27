import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreachingCardComponent } from './preaching-card.component';

describe('PreachingCardComponent', () => {
  let component: PreachingCardComponent;
  let fixture: ComponentFixture<PreachingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreachingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreachingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
