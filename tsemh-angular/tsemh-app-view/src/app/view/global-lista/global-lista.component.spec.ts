import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalListaComponent } from './global-lista.component';

describe('GlobalListaComponent', () => {
  let component: GlobalListaComponent;
  let fixture: ComponentFixture<GlobalListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
