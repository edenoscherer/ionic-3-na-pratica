import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhePage } from '../detalhe/detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista = [
    {
      id:1,
      titulo:"Curso de Ionic",
      descricao:"Aprenda Ionic na Prática",
      valor:23.90,
      valor_txt:"23,90",
      imagem:"https://digitalscientists.com/assets/case-blocks/logo-ionic-framework-thick.svg",
      aulas:[
        {
          id:"1",
          ordem:"1",
          titulo:"Introdução ao Curso",
          tempo:"10:00",
          video:"https://www.youtube.com/watch?v=9XWhNHvGhHU",
        },
        {
          id:"2",
          ordem:"2",
          titulo:"Realizando a Instalação",
          tempo:"05:00",
          video:"https://www.youtube.com/watch?v=9XWhNHvGhHU",
        }
      ]
    },
    {
      id:2,
      titulo:"Curso de JS",
      descricao:"Aprenda JS na Prática",
      valor:33.90,
      valor_txt:"33,90",
      imagem:"https://digitalscientists.com/assets/case-blocks/logo-ionic-framework-thick.svg",
      aulas:[]
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  abreDetalhe(item){
    this.navCtrl.push(DetalhePage,{dados:item});
  }

}
