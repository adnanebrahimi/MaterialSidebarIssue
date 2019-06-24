import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEagerComponent } from './page-eager.component';

describe('PageEagerComponent', () => {
  let component: PageEagerComponent;
  let fixture: ComponentFixture<PageEagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
