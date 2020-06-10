import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsPanelComponent } from './songs-panel.component';

describe('SongsPanelComponent', () => {
  let component: SongsPanelComponent;
  let fixture: ComponentFixture<SongsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongsPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
