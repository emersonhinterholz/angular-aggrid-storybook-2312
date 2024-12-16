import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridPlaceholderComponent } from './aggrid-placeholder.component';

describe('AggridPlaceholderComponent', () => {
  let component: AggridPlaceholderComponent;
  let fixture: ComponentFixture<AggridPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
