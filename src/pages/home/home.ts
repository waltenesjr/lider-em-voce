import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UtilizandoPage} from '../utilizando/utilizando';

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
}
