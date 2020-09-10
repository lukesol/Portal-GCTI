import { Injectable } from '@angular/core';

@Injectable()
export class OurTeamService {

    getDesenvolvimento() {
        return [{nome: 'RAFAEL BURITI PEREIRA', img: '/assets/Imagens/rafael_buriti.png', cargo: 'COORDENADOR',
         formacao: 'Engenheiro de Computação', formacao1: 'Analista de Sistemas'},
        {nome: 'DÉCIO DAS NEVES DANTAS JÚNIOR', img: '/assets/Imagens/dercio_junior.png', cargo: 'GERENTE DE EQUIPE',
         formacao: 'Técnico em Informática'},
        {nome: 'THIAGO TIERRE DE LIMA', img: '/assets/Imagens/thiago_lima.jpeg', cargo: 'GERENTE DE EQUIPE',
         formacao: 'Técnico em Redes de Computadores', formacao1: 'Analista de Sistemas'},
        {nome: 'MARIA LUÍZA SANTOS DA SILVA', img: '/assets/Imagens/maria_silva.jpg', cargo: 'ANALISTA DE REQUISITOS',
         formacao: 'Sistemas de Informação'},
        {nome: 'MAYKON DE OLIVEIRA MENDONÇA', img: '/assets/Imagens/maykon_mendonca.jpg', cargo: 'GERENTE DE EQUIPE',
         formacao: 'Tecnólogo em Sistemas para Internet'},
        {nome: 'WENDELL MCCAULAY RAMOS ALVES', img: '/assets/Imagens/wendel_ramos.png', cargo: 'GERENTE DE EQUIPE',
         formacao: 'Tecnólogo em Sistemas para Internet'},
        {nome: 'JOÃO RENATO MOREIRA DA SILVA', img: '/assets/Imagens/joao_silva.jpeg', cargo: 'ANALISTA DEVOPS',
         formacao: 'Tecnólogo em Sistemas para Internet', formacao1: 'Técnico em Redes de Computadores'},
        {nome: 'CLAUDIVAN ALVES DA SILVA', img: '/assets/Imagens/claudivan_silva.png', cargo: 'PROGRAMADOR',
         formacao: 'Técnico em Informática'},
        {nome: 'LEANDRO AIRTON BEZERRA', img: '/assets/Imagens/leandro_bezerra.jpeg', cargo: 'PROGRAMADOR',
         formacao: 'Técnico em Redes de Computadores', formacao1: 'Tecnólogo em Sistemas para Internet'},
        {nome: 'LUIS AFONSO SANTOS PEREIRA', img: '/assets/Imagens/luis_afonso.jpeg', cargo: 'ESTAGIÁRIO',
         formacao: 'Técnico em Informática'},
        {nome: 'IGOR JOSÉ CORDEIRO DE LIMA', img: '/assets/Imagens/igor_jose.jpeg', cargo: 'ESTAGIÁRIO',
         formacao: 'Técnico em Informática'},
        {nome: 'LUIS FELIPE ALIPIO DE SOUZA', img: '/assets/Imagens/luis_felipe.jpg', cargo: 'ESTAGIÁRIO',
         formacao: 'Técnico em TI', formacao1: 'Graduando em Bacharelado de TI'},
         {nome: 'JOSÉ ZANETTE CIRÍACO DA SILVA', img: '/assets/Imagens/zanette_ciriaco.jpg', cargo: 'ESTAGIÁRIO',
         formacao: 'Sistemas para Internet'},
         {nome: 'VINICIUS RICARDO DA SILVA', img: '/assets/Imagens/vinicius_ricardo.png', cargo: 'ESTAGIÁRIO',
         formacao: 'Tecnólogo em Sistemas para Internet'},
         {nome: 'THALES AZEVEDO SILVA', img: '/assets/Imagens/thales_silva.jpg', cargo: 'ESTAGIÁRIO',
         formacao: 'Técnico em Informática', formacao1: 'Graduando em Análise e Desenvolvimento'},
         {nome: 'ALISSANDRA CASTELO BRANCO CABRAL', img: '/assets/Imagens/alissandra_cabral.jpeg', cargo: 'ESTAGIÁRIO',
         formacao: 'Tecnólogo em Sistemas para Internet'},
        ];
    }
    getRedes() {
        return[{nome: 'HECTOR FILIPY GURGEL DA SILVA', img: '/assets/Imagens/hector_silva.jpg', cargo: 'COORDENADOR',
         formacao: 'Técnico em Redes de Computadores'},
               {nome: 'EDUARDA DE OLIVEIRA SOUSA', img: '/assets/Imagens/eduarda.sousa.jpeg', cargo: 'ANALISTA DE INFRAESTRUTURA',
                formacao: 'Técnico em Redes de Computadores'},
               {nome: 'JOSÉ ALVES DOS SANTOS', img: '/assets/Imagens/jose_alves.jpeg', cargo: 'CABISTA'},
               {nome: 'DIOGO FELICIANO DE LIMA', img: '/assets/Imagens/diogo_feliciano.jpeg', cargo: 'CABISTA'},
               {nome: 'JULIO CÉSAR GOMES DE ANDRADE', img: '/assets/Imagens/julio_cesar.jpg', cargo: 'ESTAGIÁRIO',
                formacao: 'Tecnologo em Redes de Computadores'}];
    }
    getSuporte() {
        return[{nome: 'TIAGO FELIPE SOUSA', img: '/assets/Imagens/tiago_sousa.jpeg', cargo: 'COORDENADOR',
         formacao: 'Técnico de Informática', formacao1: 'Bacharel em Ciências e Tecnologia', formacao2: 'Engenharia de Computação'},
               {nome: 'ALMIRANTE FALCÃO S. BERNARDO', img: '/assets/Imagens/almirante_falcao.png',
                cargo: 'ASSISTENTE DE GABINETE'},
               {nome: 'MARINARA IZABELLY L. DOS SANTOS', img: '/assets/Imagens/marinara_santos.jpeg',
                cargo: 'TÉCNICA EM MANUTENÇÃO E SUPORTE', formacao: 'Técnica em Redes de Computadores'},
               {nome: 'VITORIA MAYRA LUCENA TAVARES', img: '/assets/Imagens/vitoria_tavares.jpeg',
                cargo: 'TÉCNICA EM MANUTENÇÃO E SUPORTE', formacao: 'Técnica em Redes de Computadores '},
               {nome: 'JOSIVAN FRANCISCO DA SILVA', img: '/assets/Imagens/josivan_francisco.png',
                cargo: 'MOTORISTA'},
               {nome: 'ZILENE EDINETE DO NASCIMENTO', img: '/assets/Imagens/zilene_nascimento.jpeg',
                cargo: 'TÉCNICA EM MANUTENÇÃO E SUPORTE', formacao: 'Técnica em Informática para Internet',
                 formacao1: 'Técnica em Redes de Computadores'},
               {nome: 'EMANUEL BRUNO VÉRAS MACIEL', img: '/assets/Imagens/emanuel_bruno.JPG',
                cargo: 'TÉCNICO EM MANUTENÇÃO E SUPORTE', formacao: 'Técnico em Informática',
                 formacao1: 'Graduando em Ciência da Computação'}];
    }
    getCriacao() {
        return[{nome: 'EDUARDO VICTOR ALBUQUERQUE MACIEL', img: '/assets/Imagens/eduardo_maciel.png',
         cargo: 'DIRETOR DE ARTE - ASSESSOR TÉCNICO', formacao: 'Designer Gráfico'},
               {nome: 'JOSÉ CARLOS DE SOUZA JUNIOR', img: '/assets/Imagens/jose_carlos.png',
                cargo: 'GERENTE DE EQUIPE DE ARTE', formacao: 'Web Designer'},
               {nome: 'HELOIZE BEATRIZ S. DE MEDEIROS', img: '/assets/Imagens/heloize_medeiros.png',
                cargo: 'ANALISTA DE MARKETING DIGITAL', formacao: 'Comunicação Social - Publicidade e Propaganda'}];
    }

}
