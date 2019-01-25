import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level33',
  templateUrl: './level33.component.html',
})
export class Level33Component extends BaseComponent {
  protected logComponentName(hookName: string) {
    console.log(`1. ${hookName}`);
  }
}
