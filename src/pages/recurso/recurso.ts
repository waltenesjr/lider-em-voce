import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FilmesPage} from './filmes/filmes';
import {LeituraPage} from './leitura/leitura';
import {MusicasPage} from './musicas/musicas';

/**
 * Generated class for the RecursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recurso',
  templateUrl: 'recurso.html'
})
export class RecursoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openLeitura() {
    this.navCtrl.push(LeituraPage);
  }

  openFilme() {
    this.navCtrl.push(FilmesPage);
  }

  openMusica() {
    this.navCtrl.push(MusicasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecursoPage');
  }

}
