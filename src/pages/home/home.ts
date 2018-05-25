import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UtilizandoPage} from '../utilizando/utilizando';
import {AtualizarPage} from '../atualizar/atualizar';
import {SejaPage} from '../seja/seja';
import {PratiquePage} from '../pratique/pratique';
import {Push, PushObject, PushOptions} from '@ionic-native/push';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private push: Push) {
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          alert('Permissão concedida para enviar notificações');

          const options: PushOptions = {
            android: {},
            ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
            },
            windows: {},
            browser: {
              pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
          };

          const pushObject: PushObject = this.push.init(options);

          pushObject.on('notification').subscribe((notification: any) => {
            alert(notification.message);
          });

          pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

          pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
        } else {
          alert('Permissão não concedida para enviar notificações');
        }
      });
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
