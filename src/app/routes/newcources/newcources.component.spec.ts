import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourcesComponent } from './newcources.component';

describe('NewcourcesComponent', () => {
  let component: NewcourcesComponent;
  let fixture: ComponentFixture<NewcourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
