/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {
  }
}

class ActivatedRouteStub {

  // let subject = new Subject();
  params: Observable<any> = of();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [{
        provide: ActivatedRoute, useClass: ActivatedRouteStub
      },
      {
        provide: Router, useClass: RouterStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect user to users page afewtr saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });
  it('should navigate  user to not found page when a invalid  id is given', () => {
    let activatedRouter: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'params');
    //activatedRouter.


    //expect(spy).toHaveBeenCalledWith(['users']);
  });
});
