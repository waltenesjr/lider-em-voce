import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PensamentoPage} from './pensamento/pensamento';
import {EscolhaPage} from './escolha/escolha';
import {LiderPage} from './lider/lider';
import {PazesPage} from './pazes/pazes';
import {SejaPage} from './seja/seja';
import {SiPage} from './si/si';
import {UtilizarPage} from './utilizar/utilizar';
import {RealidadePage} from './realidade/realidade';

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

  openEscolha() {
    this.navCtrl.push(EscolhaPage);
  }

  openIdealizadora() {
    this.navCtrl.push(PensamentoPage);
  }

  openLider() {
    this.navCtrl.push(LiderPage);
  }

  openPazes() {
    this.navCtrl.push(PazesPage);
  }

  openPensamento() {
    this.navCtrl.push(PensamentoPage);
  }

  openRealidade() {
    this.navCtrl.push(RealidadePage);
  }

  openSeja() {
    this.navCtrl.push(SejaPage);
  }

  openSi() {
    this.navCtrl.push(SiPage);
  }

  openUtilizar() {
    this.navCtrl.push(UtilizarPage);
  }
}
