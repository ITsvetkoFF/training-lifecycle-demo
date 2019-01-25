import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level32',
  templateUrl: './level32.component.html',
})
export class Level32Component extends BaseComponent {
  protected logComponentName(hookName: string) {
    console.log(`1. ${hookName}`);
  }
}
