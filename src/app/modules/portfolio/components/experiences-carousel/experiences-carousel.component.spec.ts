import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesCarouselComponent } from './experiences-carousel.component';

describe('ExperiencesCarouselComponent', () => {
  let component: ExperiencesCarouselComponent;
  let fixture: ComponentFixture<ExperiencesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperiencesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
