import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueCardComponent } from './mosque-card.component';

describe('MosqueCardComponent', () => {
  let component: MosqueCardComponent;
  let fixture: ComponentFixture<MosqueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosqueCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosqueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
