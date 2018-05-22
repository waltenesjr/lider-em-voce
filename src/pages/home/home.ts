import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UtilizandoPage} from '../utilizando/utilizando';
import {AtualizarPage} from '../atualizar/atualizar';
import {SejaPage} from '../seja/seja';
import {PratiquePage} from '../pratique/pratique';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goUtilizando() {
    this.navCtrl.push(UtilizandoPage);
  }

  goAtualizar() {
    this.navCtrl.push(AtualizarPage);
  }

  goSeja() {
    this.navCtrl.push(SejaPage);
  }

  goPratique() {
    this.navCtrl.push(PratiquePage);
  }
}
