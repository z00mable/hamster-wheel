import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpErrorHandlerService } from 'src/app/core/services/http-error-handler.service';
import { TestsModule } from '../../../shared/modules/tests.module';
import { SettingsPageComponent } from './settings-page.component';

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SettingsPageComponent
      ],
      imports: [
        TestsModule
      ],
      providers: [
        HttpErrorHandlerService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
