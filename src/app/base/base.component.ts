import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges,
} from '@angular/core';


export class BaseComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnDestroy {

  @Input() state = true;

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
  }

  protected logComponentName(hookName: string) {
    console.log(`1. ${hookName}`);
  }

}
