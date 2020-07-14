import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalComponent } from './portal/portal.component';

import { DepartmentsComponent } from './components/departments/departments.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { WhatwedoItemComponent } from './components/whatwedo-item/whatwedo-item.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, PortalComponent, DepartmentsComponent, WhatwedoComponent, WhatwedoItemComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SlickCarouselModule
  ]
})
export class PortalModule { }
