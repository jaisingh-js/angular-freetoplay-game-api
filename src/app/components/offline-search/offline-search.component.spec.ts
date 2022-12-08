import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineSearchComponent } from './offline-search.component';

describe('OfflineSearchComponent', () => {
  let component: OfflineSearchComponent;
  let fixture: ComponentFixture<OfflineSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
