import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomyCreatorComponent } from './taxonomy-creator.component';

describe('TaxonomyCreatorComponent', () => {
  let component: TaxonomyCreatorComponent;
  let fixture: ComponentFixture<TaxonomyCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonomyCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomyCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
