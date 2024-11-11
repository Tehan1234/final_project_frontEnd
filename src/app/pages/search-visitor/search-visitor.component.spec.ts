import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVisitorComponent } from './search-visitor.component';

describe('SearchVisitorComponent', () => {
  let component: SearchVisitorComponent;
  let fixture: ComponentFixture<SearchVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchVisitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
