import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alif123Component } from './alif123.component';

describe('Alif123Component', () => {
  let component: Alif123Component;
  let fixture: ComponentFixture<Alif123Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alif123Component]
    });
    fixture = TestBed.createComponent(Alif123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
