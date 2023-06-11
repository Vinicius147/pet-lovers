import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfcHeaderComponent } from './sfc-header.component';

describe('SfcHeaderComponent', () => {
  let component: SfcHeaderComponent;
  let fixture: ComponentFixture<SfcHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfcHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
