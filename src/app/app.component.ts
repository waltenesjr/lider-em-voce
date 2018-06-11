import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {Storage} from '@ionic/storage';
import {LoginPage} from '../pages/login/login';
import {Push, PushObject, PushOptions} from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(private push: Push,
              private storage: Storage,
              public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.redirecionar();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.configPush();
    });
  }

  redirecionar() {
    this.storage.get('cadastrado').then((val) => {
      if (val) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }

  configPush(): void {
    this.push.hasPermission().then((res: any) => {
      if (res.isEnabled) {
        const options: PushOptions = {
          android: {
            sound: true,
            vibrate: true,
            icon: 'notification_icon'
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

        alert(JSON.stringify(options))
        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => {
          alert(notification.message);
        });

        pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
      }
    });
  }
}
