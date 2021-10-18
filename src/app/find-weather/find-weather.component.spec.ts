import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindWeatherComponent } from './find-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

fdescribe('FindWeatherComponent', () => {
  let component: FindWeatherComponent;
  let fixture: ComponentFixture<FindWeatherComponent>;
  let httpClient: HttpClient;
  var originalTimeout;
  const data = {
    "coord": { "lon": -0.1257, "lat": 51.5085 }, "weather":
      [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }],
    "base": "stations", "main": {
      "temp": 287.21, "feels_like": 287.13,
      "temp_min": 285.92, "temp_max": 288.21, "pressure": 1017, "humidity": 94
    },
    "visibility": 10000, "wind": { "speed": 2.57, "deg": 170 },
    "clouds": { "all": 100 }, "dt": 1634550855, "sys":
      { "type": 2, "id": 2019646, "country": "GB", "sunrise": 1634538572, "sunset": 1634576485 },
    "timezone": 3600, "id": 2643743, "name": "London", "cod": 200
  }

  beforeEach(async(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MaterialModule, FormsModule, BrowserAnimationsModule, HttpClientTestingModule],
      providers: [HttpClient],
      declarations: [ FindWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onFousOut', () => {
    const e = {
      target: {
        value: 'London'
      }
    }
    component.onFocusOut(e);
    expect(component.showError).toBeFalsy();
  });
});
