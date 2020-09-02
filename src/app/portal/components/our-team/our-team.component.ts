import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { OurTeamService } from './our-team.service';


@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  cardDario = [
    {
      nome: 'DARIO CANDIDO DE MEDEIROS', img: '/assets/Imagens/dario.png',
      cargo: 'ASSESSOR ESPECIAL ASCTI/SECRETÁRIO ADJUNTO'
    }
  ];

  active = 1;
  desenvolvimento: any[] = [];
  redes: any[] = [];
  suporte: any[] = [];
  criacao: any[] = [];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1075,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 795,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }],
  };

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  constructor(private ourTeamService: OurTeamService) { }

  ngOnInit(): void {
    this.desenvolvimento = this.ourTeamService.getDesenvolvimento();
    this.redes = this.ourTeamService.getRedes();
    this.suporte = this.ourTeamService.getSuporte();
    this.criacao = this.ourTeamService.getCriacao();
    this.corBotoes();
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  corBotoes() {
    const nav = document.getElementById('nav');
    const btns = nav.getElementsByClassName('link');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }

}
