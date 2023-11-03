import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListingFormComponent } from './update-listing-form.component';

describe('UpdateListingFormComponent', () => {
  let component: UpdateListingFormComponent;
  let fixture: ComponentFixture<UpdateListingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateListingFormComponent]
    });
    fixture = TestBed.createComponent(UpdateListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
