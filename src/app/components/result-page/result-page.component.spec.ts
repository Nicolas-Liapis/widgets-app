import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ResultPageComponent } from './result-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetJsonService } from 'src/app/services/get-json.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PercentPipe, CurrencyPipe } from '@angular/common';

describe('ResultPageComponent', () => {
  let component: ResultPageComponent;
  let fixture: ComponentFixture<ResultPageComponent>;
  let getJson: GetJsonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        PercentPipe,
        CurrencyPipe,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap( { 'uuid': '1' } ) }
          }
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
