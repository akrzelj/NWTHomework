import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContainerComponent } from './site-container.component';

describe('SiteContainerComponent', () => {
  let component: SiteContainerComponent;
  let fixture: ComponentFixture<SiteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
