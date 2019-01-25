import { Component, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level22',
  templateUrl: './level22.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Level22Component extends BaseComponent implements DoCheck {
  public componentName = "\t\t2.2."

  constructor(private cd: ChangeDetectorRef) {
    super()
  }

  ngDoCheck() {
    super.ngDoCheck();
    if (this.forceCheck) {
      this.cd.markForCheck();
    }
  }
}
