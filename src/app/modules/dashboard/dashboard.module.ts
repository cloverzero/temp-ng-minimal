import { NgModule } from '@angular/core'
import { SharedModule } from '@shared/shared.module'
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module'
import { DashboardComponent } from './components/dashboard/dashboard.component'



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
