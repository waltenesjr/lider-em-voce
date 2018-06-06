import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  etapa: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.etapa = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
