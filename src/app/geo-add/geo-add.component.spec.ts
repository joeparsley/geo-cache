import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddComponent } from './geo-add.component';

describe('GeoAddComponent', () => {
  let component: GeoAddComponent;
  let fixture: ComponentFixture<GeoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
