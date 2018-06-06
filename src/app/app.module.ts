import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import {LoginPage} from '../pages/login/login';
import {UtilizandoPage} from '../pages/utilizando/utilizando';
import {AtualizarPage} from '../pages/atualizar/atualizar';
import {SejaPage} from '../pages/seja/seja';
import {PratiquePage} from '../pages/pratique/pratique';
import {Push} from '@ionic-native/push';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from '../providers/auth/auth-service';
import {Facebook} from "@ionic-native/facebook";
import {PerfilPage} from '../pages/perfil/perfil';
import {PensamentoPage} from "../pages/utilizando/pensamento/pensamento";

const fireBaseConfig = {
  apiKey: 'AIzaSyC4ETJq4Ox5iToDwOROeIQf11WjVVzrfeQ',
  authDomain: 'lider-em-voce-4de9f.firebaseapp.com',
  databaseURL: 'https://lider-em-voce-4de9f.firebaseio.com',
  projectId: 'lider-em-voce-4de9f',
  storageBucket: 'lider-em-voce-4de9f.appspot.com',
  messagingSenderId: '458382218721'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UtilizandoPage,
    AtualizarPage,
    SejaPage,
    PratiquePage,
    PensamentoPage,
    PerfilPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UtilizandoPage,
    AtualizarPage,
    SejaPage,
    PratiquePage,
    PensamentoPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    AuthService,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
