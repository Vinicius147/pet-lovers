import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfcFooterComponent } from './sfc-footer.component';

describe('SfcFooterComponent', () => {
  let component: SfcFooterComponent;
  let fixture: ComponentFixture<SfcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfcFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
