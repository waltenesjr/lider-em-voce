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
  quantPergunA: number;
  quantPergunB: number;
  quantPergunC: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.etapa = 1;
    this.quantPergunA = 0;
    this.quantPergunB = 0;
    this.quantPergunC = 0;
  }

  changeList(pergunta: string) {
    this.etapa++;
    this.contarPergunta(pergunta);
  }

  getResult(pergunta: string) {
    this.contarPergunta(pergunta);
    if (this.quantPergunA > this.quantPergunB) {
      if (this.quantPergunA > this.quantPergunC) {
        alert('Pergunta A')
      } else {
        alert('pergunta C')
      }
    } else {
      if (this.quantPergunB > this.quantPergunC) {
        alert('Pergunta B')
      } else {
        alert('pergunta C')
      }
    }
  }

  contarPergunta(pergunta: string) {
    if (pergunta === 'a') {
      this.quantPergunA++;
    } else if (pergunta === 'b') {
      this.quantPergunB++;
    } else {
      this.quantPergunC++;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
