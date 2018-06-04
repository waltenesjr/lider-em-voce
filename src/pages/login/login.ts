import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Push, PushObject, PushOptions} from "@ionic-native/push";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private push: Push) {
    this.push.hasPermission().then((res: any) => {
        if (res.isEnabled) {
          const options: PushOptions = {
            android: {
              icon: 'http://sanambiental.com.br/liderem/logo',
              iconColor: '#FFFFFF',
              vibrate: true
            },
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
        }
      });
  }

  continue() {
    this.navCtrl.setRoot(HomePage);
  }
}
