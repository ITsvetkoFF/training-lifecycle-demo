# TrainingLifecycleDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Permanent [Link](https://stackblitz.com/github/ITsvetkoFF/training-lifecycle-demo) to demo

## How to reason about this example

![App screenshot](https://raw.githubusercontent.com/itsvetkoff/training-lifecycle-demo/master/img/app1.png)

App describes how boolean value can be propagated over a hierarchy of components. Output in console logs all the lifecycle hooks in order of execution.

1. Check the component structure: 
- There is a BaseComponent that has common logging/formatting logic
- State is propagated using `[state]="state"` for every component
- There are 4 levels of nested components: app - level1 - level2.1,level2.2 - level3.1,level3.3,level3.3,level3.4

2. Check default behavior: toggling state for topmost component toggles the whole app. Toggling state in `2.1` toggles only `3.1` and `3.2`. But ChangeDetection happens everywhere.

3. Understanding OnPush Change Detection Strategy. Please note that `2.2` has `changeDetection: ChangeDetectionStrategy.OnPush`. 
Clicking "block" button on level1 removes connection between level1 and level2 (changes are not propagating) using:
```html
<ng-container *ngIf="blocking">    
  <lcd-level21></lcd-level21>
  <lcd-level22></lcd-level22>
</ng-container>
<ng-container *ngIf="!blocking">    
  <lcd-level21 [state]="state"></lcd-level21>
  <lcd-level22 [state]="state"></lcd-level22>
</ng-container>
```
Please note OnDestroy lifecycle hooks: this happens because ngIf removes old components from DOM and adds new.

After blocking changes on level1, you can see how lifecycle hooks are called when toggling the whole app's state: 
OnChanges is called only on level1 and DoCheck is not called on `3.3` and `3.4`. This happens because changeDetection is not happening for `2.2` (its OnPush call happens in scope of change detection of a parent component!)

This behavior can be changed: there is a button "check" in `2.2`, that explicitly calls `this.cd.markForCheck();` in every `DoCheck()`, after clicking this button you can see that during Change Detection DoCheck is called on child components as well.

4. Understanding Detached state.
There is a button "detach" in `2.1`. Clicking it calls `this.cd.detach()` which removes this `2.1` and its children from global Change Detection.
Several notes:
- Calling "detatch" does not update current view! You need to click `detect` that is calling `this.cd.detectChanges();` as well
- This can improve performance a lot!
- Note that hostBindings for classes are still being updated for `2.1`. (Host bindings are independent from changeDetection, since new value of state comes to `2.1`, HostBinding handles this new value)
- Since Change detection in detached tree is not happening, values are not propagated to `3.1` and `3.2`. To propagate value `detect` button should be clicked

Now you know Change Detection! :)
