import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render total votes as 21', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".vote-count"));
    console.log(de);
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain("21");
  });
  it('should highlight upvote button if click on upvote', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".glyphicon-menu-up"));
    console.log(de);
    expect(de.classes['highlighted']).toBeTruthy();

  });
  it('should increse total votes when click on upvote button', () => {

    component.othersVote = 20;
    component.myVote = 9;
    let button = fixture.debugElement.query(By.css(".glyphicon-menu-up"));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    console.log(component.totalVotes);
    expect(component.totalVotes).toBe(30);

  });
});
