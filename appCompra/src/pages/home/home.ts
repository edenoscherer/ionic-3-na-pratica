import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetalhePage} from "../detalhe/detalhe";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lista = [
    {
      id: 2,
      titulo:"Curso Ionic",
      descricao:"Aprenda Ionic 3 na pratica",
      valor: 23.90,
      valor_txt:"23,90",
      imagem: "https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png",
      aulas: [
        {
          id:"1",
          ordem: "1",
          titulo:"Introdução ao curso",
          tempo:"10:00",
          video:"https://www.youtube.com/watch?v=kx7f_5IJXY8"
        },
        {
          id:"2",
          ordem: "2",
          titulo:"Realizando a instalação",
          tempo:"5:00",
          video:"https://www.youtube.com/watch?v=kx7f_5IJXY8"
        }
      ]
    },
    {
      id: 2,
      titulo:"Curso JS",
      descricao:"Aprenda JS na pratica",
      valor: 33.90,
      valor_txt:"33,90",
      imagem: "https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png",
      aulas: []
    }
  ];

  private navCtrl: NavController
  constructor(navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  public abreDetalhe(item): void {
    this.navCtrl.push(DetalhePage, {dados: item});
  }
}
