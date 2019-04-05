import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesDisplayComponent } from './clothes-display.component';

describe('ClothesDisplayComponent', () => {
  let component: ClothesDisplayComponent;
  let fixture: ComponentFixture<ClothesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
