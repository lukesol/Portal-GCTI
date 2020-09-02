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
import { ConqueredNumbersComponent } from './components/conquered-numbers/conquered-numbers.component';
import { MainProjectsComponent } from './components/main-projects/main-projects.component';
import { MainProjectsItemComponent } from './components/main-projects-item/main-projects-item.component';
import { WhoMakesUsComponent } from './components/who-makes-us/who-makes-us.component';
import { ModalEmailComponent } from './components/modal-email/modal-email.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { OurTeamService } from './components/our-team/our-team.service';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PortalComponent,
    DepartmentsComponent,
    WhatwedoComponent,
    WhatwedoItemComponent,
    ConqueredNumbersComponent,
    MainProjectsComponent,
    MainProjectsItemComponent,
    WhoMakesUsComponent,
    ModalEmailComponent,
    OurTeamComponent,
    TeamCardComponent,
    MenuButtonComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SlickCarouselModule,
    NgbModule
  ],
  providers: [
    OurTeamService
  ],
  exports: []

})
export class PortalModule { }
