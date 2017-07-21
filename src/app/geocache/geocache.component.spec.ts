import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacheComponent } from './geocache.component';

describe('GeocacheComponent', () => {
  let component: GeocacheComponent;
  let fixture: ComponentFixture<GeocacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
