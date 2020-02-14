import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionanswersPage } from './questionanswers.page';

describe('QuestionanswersPage', () => {
  let component: QuestionanswersPage;
  let fixture: ComponentFixture<QuestionanswersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionanswersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionanswersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
