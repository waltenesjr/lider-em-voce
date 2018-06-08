import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import {LoginPage} from '../pages/login/login';
import {UtilizandoPage} from '../pages/utilizando/utilizando';
import {AtualizarPage} from '../pages/atualizar/atualizar';
import {SejaPage} from '../pages/utilizando/seja/seja';
import {PratiquePage} from '../pages/pratique/pratique';
import {Push} from '@ionic-native/push';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from '../providers/auth/auth-service';
import {Facebook} from '@ionic-native/facebook';
import {PerfilPage} from '../pages/perfil/perfil';
import {PensamentoPage} from '../pages/utilizando/pensamento/pensamento';
import {EscolhaPage} from '../pages/utilizando/escolha/escolha';
import {IdealizadoraPage} from '../pages/utilizando/idealizadora/idealizadora';
import {LiderPage} from '../pages/utilizando/lider/lider';
import {PazesPage} from '../pages/utilizando/pazes/pazes';
import {SiPage} from '../pages/utilizando/si/si';
import {RealidadePage} from '../pages/utilizando/realidade/realidade';
import {UtilizarPage} from '../pages/utilizando/utilizar/utilizar';
import {LideremvcPage} from '../pages/atualizar/lideremvc/lideremvc';
import {AutoliderancaPage} from '../pages/atualizar/autolideranca/autolideranca';
import {AutosabotagemPage} from '../pages/atualizar/autosabotagem/autosabotagem';
import {IdealizacaoPage} from '../pages/atualizar/idealizacao/idealizacao';
import {ComparacaoPage} from '../pages/atualizar/comparacao/comparacao';
import {VitimizacaoPage} from '../pages/atualizar/vitimizacao/vitimizacao';
import {LimitacaoPage} from '../pages/atualizar/limitacao/limitacao';
import {ImpotenciaPage} from '../pages/atualizar/impotencia/impotencia';
import {ImaginacaoPage} from '../pages/atualizar/imaginacao/imaginacao';
import {AlternativaPage} from '../pages/pratique/alternativa/alternativa';
import {AtitudePage} from '../pages/pratique/atitude/atitude';
import {AutocriticaPage} from '../pages/pratique/autocritica/autocritica';
import {DiarioPage} from '../pages/pratique/diario/diario';
import {FocoPage} from '../pages/pratique/foco/foco';
import {TempoPage} from '../pages/pratique/tempo/tempo';
import {VideoPage} from '../pages/video/video';
import {RecursoPage} from '../pages/recurso/recurso';
import {ImportantePage} from '../pages/importante/importante';

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
    LoginPage,
    PerfilPage,
    LiderPage,
    VideoPage,
    RecursoPage,
    ImportantePage,
    // Utilizando o aplicativo
    UtilizandoPage,
    EscolhaPage,
    IdealizadoraPage,
    LiderPage,
    PazesPage,
    PensamentoPage,
    RealidadePage,
    SejaPage,
    SiPage,
    UtilizarPage,
    // Atualizar crença
    AtualizarPage,
    LideremvcPage,
    AutoliderancaPage,
    AutosabotagemPage,
    IdealizacaoPage,
    ComparacaoPage,
    VitimizacaoPage,
    LimitacaoPage,
    ImpotenciaPage,
    ImaginacaoPage,
    // Pratique sua auto liderança
    PratiquePage,
    AlternativaPage,
    AtitudePage,
    AutocriticaPage,
    DiarioPage,
    FocoPage,
    TempoPage
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
    LoginPage,
    PerfilPage,
    LiderPage,
    VideoPage,
    RecursoPage,
    ImportantePage,
    // Utilizando o aplicativo
    UtilizandoPage,
    EscolhaPage,
    IdealizadoraPage,
    LiderPage,
    PazesPage,
    PensamentoPage,
    RealidadePage,
    SejaPage,
    SiPage,
    UtilizarPage,
    // Atualizar crença
    AtualizarPage,
    LideremvcPage,
    AutoliderancaPage,
    AutosabotagemPage,
    IdealizacaoPage,
    ComparacaoPage,
    VitimizacaoPage,
    LimitacaoPage,
    ImpotenciaPage,
    ImaginacaoPage,
    // Pratique sua auto liderança
    PratiquePage,
    AlternativaPage,
    AtitudePage,
    AutocriticaPage,
    DiarioPage,
    FocoPage,
    TempoPage
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
