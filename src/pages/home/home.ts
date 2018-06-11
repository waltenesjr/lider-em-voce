import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {UtilizandoPage} from '../utilizando/utilizando';
import {AtualizarPage} from '../atualizar/atualizar';
import {PratiquePage} from '../pratique/pratique';
import {PerfilPage} from '../perfil/perfil';
import {Storage} from '@ionic/storage';
import {LiderjaPage} from "../liderja/liderja";
import {RecursoPage} from "../recurso/recurso";
import {VideoPage} from "../video/video";
import {ImportantePage} from "../importante/importante";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private storage: Storage,
              private toastCtrl: ToastController) {
    this.primeiroAcesso();
  }

  primeiroAcesso() {
    this.storage.get('primeiroAcesso').then((val) => {
      if (!val) {
        let toast = this.toastCtrl.create({position: 'top', closeButtonText: 'OK', showCloseButton: true});
        toast.setMessage('Bem vindo, descubra aqui o líder que há em você');
        toast.present();
        this.storage.set('primeiroAcesso', true);
      }
    });
  }

  goUtilizando() {
    this.navCtrl.push(UtilizandoPage);
  }

  goPerfil() {
    this.navCtrl.push(PerfilPage);
  }

  goAtualizar() {
    this.navCtrl.push(AtualizarPage);
  }

  goLiderJa() {
    this.navCtrl.push(LiderjaPage);
  }

  goPratique() {
    this.navCtrl.push(PratiquePage);
  }

  goRecurso() {
    this.navCtrl.push(RecursoPage);
  }

  goVideo() {
    this.navCtrl.push(VideoPage);
  }

  goImportante() {
    this.navCtrl.push(ImportantePage);
  }
}
