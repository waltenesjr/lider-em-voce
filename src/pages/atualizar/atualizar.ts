import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EscolhaPage} from '../utilizando/escolha/escolha';
import {AutoliderancaPage} from './autolideranca/autolideranca';
import {AutosabotagemPage} from './autosabotagem/autosabotagem';
import {ComparacaoPage} from './comparacao/comparacao';
import {IdealizacaoPage} from './idealizacao/idealizacao';
import {ImaginacaoPage} from './imaginacao/imaginacao';
import {ImpotenciaPage} from './impotencia/impotencia';
import {LideremvcPage} from './lideremvc/lideremvc';
import {LimitacaoPage} from './limitacao/limitacao';
import {VitimizacaoPage} from './vitimizacao/vitimizacao';

/**
 * Generated class for the AtualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-atualizar',
  templateUrl: 'atualizar.html',
})
export class AtualizarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goAutolideranca() {
    this.navCtrl.push(AutoliderancaPage);
  }

  goAutosabotagem() {
    this.navCtrl.push(AutosabotagemPage);
  }

  goComparacao() {
    this.navCtrl.push(ComparacaoPage);
  }

  goIdealizacao() {
    this.navCtrl.push(IdealizacaoPage);
  }

  goImaginacao() {
    this.navCtrl.push(ImaginacaoPage);
  }

  goImpotencia() {
    this.navCtrl.push(ImpotenciaPage);
  }

  goLideremvc() {
    this.navCtrl.push(LideremvcPage);
  }

  goLimitacao() {
    this.navCtrl.push(LimitacaoPage);
  }

  goVitimizacao() {
    this.navCtrl.push(VitimizacaoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtualizarPage');
  }

}
