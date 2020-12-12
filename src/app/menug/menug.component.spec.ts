import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugComponent } from './menug.component';

describe('MenugComponent', () => {
  let component: MenugComponent;
  let fixture: ComponentFixture<MenugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
