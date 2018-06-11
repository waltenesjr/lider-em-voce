import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TempoPage} from './tempo/tempo';
import {AlternativaPage} from './alternativa/alternativa';
import {AutocriticaPage} from './autocritica/autocritica';
import {DiarioPage} from './diario/diario';
import {FocoPage} from './foco/foco';
import {AtitudePage} from './atitude/atitude';

/**
 * Generated class for the PratiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pratique',
  templateUrl: 'pratique.html'
})
export class PratiquePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTempo() {
    this.navCtrl.push(TempoPage);
  }

  goAlternativa() {
    this.navCtrl.push(AlternativaPage);
  }

  goAutocritica() {
    this.navCtrl.push(AutocriticaPage);
  }

  goDiario() {
    this.navCtrl.push(DiarioPage);
  }

  goFoco() {
    this.navCtrl.push(FocoPage);
  }

  goAtitude() {
    this.navCtrl.push(AtitudePage);
  }
}
