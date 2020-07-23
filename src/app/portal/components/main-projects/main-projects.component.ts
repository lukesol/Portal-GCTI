import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.scss']
})
export class MainProjectsComponent implements OnInit {

  slides = [
    {link: "http://www.parnamirim.rn.gov.br/estatistica_de_transito/",img: "assets/Imagens/projetos_boletim.png"},
    {link: "http://geoparnamirim.parnamirim.rn.gov.br/#/portal",img: "assets/Imagens/projetos_obras.png"},
    {link: "http://diariooficial.parnamirim.rn.gov.br/#/",img: "assets/Imagens/projetos_diario.png"},
    {link: "http://portalfinados.parnamirim.rn.gov.br/#/home",img: "assets/Imagens/projetos_finados.png"},
    {link: "http://falacidadao.parnamirim.rn.gov.br/#/cidadao",img: "assets/Imagens/projetos_fala.png"},
    {link: "http://pontoeletronico.parnamirim.rn.gov.br:8080/#/login",img: "assets/Imagens/projetos_ponto.png"}
  ];
  slideConfig = {
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "dots": true,
  "infinite": true,
  "autoplay": true,
  "arrows":false,
  "autoplaySpeed": 3000};

  @ViewChild('slickModal')slickModal: SlickCarouselComponent;

  next() {
    this.slickModal.slickNext();
    }
    prev() {
    this.slickModal.slickPrev();
    }

  constructor() { }

  ngOnInit(): void {
  }

}
