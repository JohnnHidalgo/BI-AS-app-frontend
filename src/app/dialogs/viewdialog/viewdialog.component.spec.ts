import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdialogComponent } from './viewdialog.component';

describe('ViewdialogComponent', () => {
  let component: ViewdialogComponent;
  let fixture: ComponentFixture<ViewdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
