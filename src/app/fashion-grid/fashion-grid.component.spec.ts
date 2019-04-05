import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionGridComponent } from './fashion-grid.component';

describe('FashionGridComponent', () => {
  let component: FashionGridComponent;
  let fixture: ComponentFixture<FashionGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
