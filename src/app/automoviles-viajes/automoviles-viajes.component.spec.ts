import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilesViajesComponent } from './automoviles-viajes.component';

describe('AutomovilesViajesComponent', () => {
  let component: AutomovilesViajesComponent;
  let fixture: ComponentFixture<AutomovilesViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomovilesViajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomovilesViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
