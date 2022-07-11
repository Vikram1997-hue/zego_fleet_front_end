import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from './directives/numbers-only-directive';
import { NoSpaceDirective } from './directives/no-whitespace.directive';
import { ClickOutsideDirective } from './directives/clickoutside.directive';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [NumberDirective,NoSpaceDirective,ClickOutsideDirective,FilterPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    NumberDirective,
    NoSpaceDirective,
    ClickOutsideDirective,
    FilterPipe
  ]
})
export class SharedModule { }
