import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrModalComponent } from './flickr-modal.component';

describe('FlickrModalComponent', () => {
  let component: FlickrModalComponent;
  let fixture: ComponentFixture<FlickrModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlickrModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlickrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
