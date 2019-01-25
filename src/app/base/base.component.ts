import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges, HostBinding,
} from '@angular/core';

export class BaseComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnDestroy {

  @Input() 
  public state = true;

  @HostBinding("class")
  public get cmpClass() {
    return this.state ? "green" : "red";
  }

  @Input() 
  public blocking = false;

  public detached = false;
  public forceCheck = false;

  public componentName: string;

  ngOnInit() {
    this.logComponentName("OnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logComponentName("OnChanges");
  }

  ngDoCheck(): void {
    this.logComponentName("DoCheck");
  }

  ngAfterContentInit(): void {
    this.logComponentName("AfterContentInit");
  }

  ngAfterContentChecked(): void {
    this.logComponentName("AfterContentChecked");
  }

  ngAfterViewInit(): void {
    this.logComponentName("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.logComponentName("AfterViewChecked");
  }

  ngOnDestroy(): void {
    this.logComponentName("OnDestroy");
  }

  public toggleState() {
    this.state = !this.state;
    console.log("------------------------------");
    console.log(`${this.componentName} Changing State to ${this.state}`);
    console.log("------------------------------");
  }
  public toggleBlocking() {
    this.blocking = !this.blocking;
    console.log("------------------------------");
    console.log(`${this.componentName} Changing Blocking to ${this.state}`);
    console.log("------------------------------");
  }
  public toggleDetach() {
    this.detached = !this.detached;
    console.log("------------------------------");
    console.log(`${this.componentName} Changing Detach to ${this.state}`);
    console.log("------------------------------");
  }
  public toggleCheck() {
    this.forceCheck = !this.forceCheck;
    console.log("------------------------------");
    console.log(`${this.componentName} Changing Force to ${this.forceCheck}`);
    console.log("------------------------------");
  }

  public getStateString() {
    return `I am ${this.state}${this.blocking ? " (blocking)" : ""}${this.detached ? " (detached)" : ""}${this.forceCheck ? " (force-checking)" : ""}`
  }

  protected logComponentName(hookName: string) {
    console.log(`${this.componentName} ${hookName}`);
  }

}
