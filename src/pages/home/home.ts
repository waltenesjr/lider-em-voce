import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {UtilizandoPage} from '../utilizando/utilizando';
import {AtualizarPage} from '../atualizar/atualizar';
import {SejaPage} from '../utilizando/seja/seja';
import {PratiquePage} from '../pratique/pratique';
import {PerfilPage} from '../perfil/perfil';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
    .scroll-content {
      background: url("../../assets/imgs/back.png") no-repeat center center fixed;
      /*-webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;*/
    }
  `]
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
        let toast = this.toastCtrl.create({position: 'top', closeButtonText: 'OK'});
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

  goSeja() {
    this.navCtrl.push(SejaPage);
  }

  goPratique() {
    this.navCtrl.push(PratiquePage);
  }
}
