import {Routes} from '@angular/router';
import { HelloComponent } from './hello.component';
import { DataBindingComponent } from './data-binding.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {AuthGuardService} from './app-shared/auth-guard.service'
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

export const routes:Routes=[

    {path: "home", component:HelloComponent},
    {path: "binding", component:DataBindingComponent,canActivate:[AuthGuardService]},
    {path: "rxjs", component:RxjsComponent},
    {path: "cd", component:ChangeDetectionComponent},
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"**",component:DataBindingComponent}
]