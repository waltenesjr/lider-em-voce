import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PensamentoPage} from './pensamento/pensamento';

/**
 * Generated class for the UtilizandoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-utilizando',
  templateUrl: 'utilizando.html'
})
export class UtilizandoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPensamento() {
    this.navCtrl.push(PensamentoPage);
  }
}
