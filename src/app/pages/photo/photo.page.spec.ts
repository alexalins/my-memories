import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoPage } from './photo.page';

describe('PhotoPage', () => {
  let component: PhotoPage;
  let fixture: ComponentFixture<PhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
