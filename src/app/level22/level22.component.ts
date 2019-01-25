import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level22',
  templateUrl: './level22.component.html',
})
export class Level22Component extends BaseComponent {
  protected logComponentName(hookName: string) {
    console.log(`1. ${hookName}`);
  }
}
