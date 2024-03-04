import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitHighchartsComponent } from './fruit-highcharts.component';

describe('FruitHighchartsComponent', () => {
  let component: FruitHighchartsComponent;
  let fixture: ComponentFixture<FruitHighchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitHighchartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
