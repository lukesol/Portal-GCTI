import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalComponent } from './portal/portal.component';
import { InicialSectionComponent } from './components/inicial-section/inicial-section.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, PortalComponent, InicialSectionComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
