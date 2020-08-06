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
import { SimpleModalModule, DefaultSimpleModalOptionConfig, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { ConqueredNumbersComponent } from './components/conquered-numbers/conquered-numbers.component';
import { MainProjectsComponent } from './components/main-projects/main-projects.component';
import { MainProjectsItemComponent } from './components/main-projects-item/main-projects-item.component';
import { WhoMakesUsComponent } from './components/who-makes-us/who-makes-us.component';
import { ModalEmailComponent } from './components/modal-email/modal-email.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, PortalComponent, DepartmentsComponent, WhatwedoComponent, WhatwedoItemComponent, ConqueredNumbersComponent, MainProjectsComponent,MainProjectsItemComponent, WhoMakesUsComponent, ModalEmailComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SlickCarouselModule,
    SimpleModalModule
  ],
  providers:[{
    provide: DefaultSimpleModalOptionConfig,
    useValue: {...defaultSimpleModalOptions,...{ closeOnEscape: true, closeOnClickOutside: true }}
  }]

})
export class PortalModule { }
