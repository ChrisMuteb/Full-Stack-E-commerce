import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListingDataFormComponent } from './app-listing-data-form.component';

describe('AppListingDataFormComponent', () => {
  let component: AppListingDataFormComponent;
  let fixture: ComponentFixture<AppListingDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppListingDataFormComponent]
    });
    fixture = TestBed.createComponent(AppListingDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
