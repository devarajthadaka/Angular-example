import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbemsComponent } from './albems.component';

describe('AlbemsComponent', () => {
  let component: AlbemsComponent;
  let fixture: ComponentFixture<AlbemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
