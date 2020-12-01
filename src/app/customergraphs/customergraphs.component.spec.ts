import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomergraphsComponent } from './customergraphs.component';

describe('CustomergraphsComponent', () => {
  let component: CustomergraphsComponent;
  let fixture: ComponentFixture<CustomergraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomergraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomergraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
