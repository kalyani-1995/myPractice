import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplehomeComponent } from './principlehome.component';

describe('PrinciplehomeComponent', () => {
  let component: PrinciplehomeComponent;
  let fixture: ComponentFixture<PrinciplehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrinciplehomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinciplehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
