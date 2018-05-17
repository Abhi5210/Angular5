import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnformComponent } from './enform.component';

describe('EnformComponent', () => {
  let component: EnformComponent;
  let fixture: ComponentFixture<EnformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
