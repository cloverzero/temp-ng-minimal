import { BrowserModule } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component'
import { CoreModule } from '@app/core.module'
import { SharedModule } from '@shared/shared.module'

registerLocaleData(en)

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
