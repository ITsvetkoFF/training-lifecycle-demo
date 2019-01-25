import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level1',
  templateUrl: './level1.component.html'
})
export class Level1Component extends BaseComponent {
  protected logComponentName(hookName: string) {
    console.log(`1. ${hookName}`);
  }
}
