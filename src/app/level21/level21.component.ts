import { Component, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level21',
  templateUrl: './level21.component.html',
})
export class Level21Component extends BaseComponent {
  public componentName = "\t\t2.1."

  constructor(private cd: ChangeDetectorRef) {
    super()
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    // if (changes["state"] && changes["state"].currentValue) {
    //   this.cd.detectChanges(); // Only for true it updates
    // }
  }

  toggleDetach() {
    super.toggleDetach()
    if (this.detached) {
      this.cd.detach();
    } else {
      this.cd.reattach();
    }
  }
}
