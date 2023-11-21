import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterreactifComponent } from './ajouterreactif.component';

describe('AjouterreactifComponent', () => {
  let component: AjouterreactifComponent;
  let fixture: ComponentFixture<AjouterreactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterreactifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterreactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
