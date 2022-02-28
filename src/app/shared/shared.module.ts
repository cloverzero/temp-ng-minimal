import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { FeatureMapComponent } from './components/feature-map/feature-map.component'
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [FeatureMapComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureMapComponent,
  ],
})
export class SharedModule { }
