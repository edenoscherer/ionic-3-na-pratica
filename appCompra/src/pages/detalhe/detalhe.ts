import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  public item = {};

  private navCtrl: NavController;
  private navParams: NavParams;


  constructor(navCtrl: NavController, navParams: NavParams) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;

    this.item = this.navParams.get("dados");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
