import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level34',
  templateUrl: './level34.component.html',
})
export class Level34Component extends BaseComponent {
  protected logComponentName(hookName: string) {
    console.log(`3.4. ${hookName}`);
  }
}
