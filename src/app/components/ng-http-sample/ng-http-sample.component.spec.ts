import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHttpSampleComponent } from './ng-http-sample.component';

describe('NgHttpSampleComponent', () => {
  let component: NgHttpSampleComponent;
  let fixture: ComponentFixture<NgHttpSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgHttpSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHttpSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
