import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.scss']
})
export class WhatwedoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {n:"1",description:"Diário Oficial",title:"Sistema",img: "assets/Imagens/icons/ico_diario.svg",link:"http://diariooficial.parnamirim.rn.gov.br/#/"},
    {n:"0",description:"Finados",title:"Portal",img: "assets/Imagens/icons/ico_finados.svg",link:"http://portalfinados.parnamirim.rn.gov.br/#/home"},
    {n:"1",description:"Fala Cidadão",title:"Sistema",img: "assets/Imagens/icons/ico_chamado.svg",link:"http://falacidadao.parnamirim.rn.gov.br/#/cidadao"},
    {n:"0",description:"Prefeitura de Parnamirim",title:"Portal",img: "assets/Imagens/icons/ico_portalprefeitura.svg",link:"https://parnamirim.rn.gov.br/"},
    {n:"1",description:"SGI Protocolo",title:"Sistema",img: "assets/Imagens/icons/ico_chamado.svg",link:"http://sgiprotocolo.parnamirim.rn.gov.br:8080/#/login"},
    {n:"0",description:"Ponto Eletrônico",title:"Sistema",img: "assets/Imagens/icons/ico_ponto_eletronico.svg",link:"http://pontoeletronico.parnamirim.rn.gov.br:8080/#/login"},
    {n:"1",description:"Geo Parnamirim",title:"Portal",img: "assets/Imagens/icons/ico_geo_parnamirim.svg",link:"http://geoparnamirim.parnamirim.rn.gov.br/#/portal"},
    {n:"0",description:"Estatísticas de Trânsito",title:"Sistema",img: "assets/Imagens/icons/ico_estatisticas.svg",link:"http://www.parnamirim.rn.gov.br/estatistica_de_transito/"},
    {n:"1",description:"Transparência",title:"Portal",img: "assets/Imagens/icons/ico_transparencia.svg",link:"https://parnamirim.rn.gov.br/transparencia.jsp"},
    {n:"0",description:"Turismo",title:"Portal",img: "assets/Imagens/icons/ico_turismo.svg",link:"http://portalturismo.parnamirim.rn.gov.br/"},
    {n:"1",description:"Parnamirim Digital",title:"Portal",img: "assets/Imagens/icons/ico_parnamirim_digital.svg",link:"http://portalparnamirimdigital.parnamirim.rn.gov.br/"},
    {n:"0",description:"Corrida do Trabalhador",title:"Portal",img: "assets/Imagens/icons/ico_corrida_trabalhador.svg",link:"http://portalcorridadotrabalhador.parnamirim.rn.gov.br/#/home"}
  ];
  slideConfig = {
   "slidesToShow": 4,
   "slidesToScroll": 4,
   "infinite": true,
   "dots": false,
   "arrows": true
  };

  mobileConfig = {
   "slidesToShow": 2,
   "slidesToScroll": 2,
   "infinite": true,
   "dots": false,
   "arrows": true
  };
}


