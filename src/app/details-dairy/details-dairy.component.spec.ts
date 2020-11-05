import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDairyComponent } from './details-dairy.component';

describe('DetailsDairyComponent', () => {
  let component: DetailsDairyComponent;
  let fixture: ComponentFixture<DetailsDairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDairyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
