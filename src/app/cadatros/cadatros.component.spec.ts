import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatrosComponent } from './cadatros.component';

describe('CadatrosComponent', () => {
  let component: CadatrosComponent;
  let fixture: ComponentFixture<CadatrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadatrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadatrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
