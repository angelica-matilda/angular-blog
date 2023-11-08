import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBlogPostComponent } from './individual-blog-post.component';

describe('IndividualBlogPostComponent', () => {
  let component: IndividualBlogPostComponent;
  let fixture: ComponentFixture<IndividualBlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualBlogPostComponent]
    });
    fixture = TestBed.createComponent(IndividualBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
