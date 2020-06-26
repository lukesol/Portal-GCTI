import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalComponent } from './portal/portal.component';

import { DepartmentsComponent } from './components/departments/departments.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PortalComponent, DepartmentsComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
