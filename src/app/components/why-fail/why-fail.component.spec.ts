import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFailComponent } from './why-fail.component';

describe('WhyFailComponent', () => {
  let component: WhyFailComponent;
  let fixture: ComponentFixture<WhyFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyFailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
