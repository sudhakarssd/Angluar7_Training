import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenNamesValidatorDirective } from './ForbiddenNamesValidator';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [HighlightDirective,ForbiddenNamesValidatorDirective],
  imports: [
    CommonModule
  ],
  exports:[HighlightDirective,ForbiddenNamesValidatorDirective],
  //providers:[{provide: AuthGuardService, useClass:AuthGuardService}]
  providers:[AuthGuardService]
})
export class AppSharedModule { }

