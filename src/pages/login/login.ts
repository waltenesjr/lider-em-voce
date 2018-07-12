import {Component, Injector} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Storage} from '@ionic/storage';
import {User} from '../../providers/auth/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../providers/auth/auth-service';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';

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

  public form: FormGroup;
  public fb: FormBuilder;

  etapa: string;

  constructor(private injector: Injector,
              private authService: AuthService,
              private storage: Storage,
              private toastCtrl: ToastController,
              private facebook: Facebook,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.initForm();
    this.etapa = 'tipoLogin';
  }

  initForm(): void {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      email: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required])
    });
  }

  createEmail(): void {
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'middle',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    if (this.form.valid) {
      let user = new User(this.form.controls['email'].value, this.form.controls['password'].value);
      this.authService.createUser(user).then((user: any) => {
        toast.setMessage('Usuário cadastrado com sucesso');
        toast.present();
        this.continue();
        this.storage.set('logado', true);
      }).catch((error: any) => {
        if (error.code = 'auth/email-already-in-use') {
          this.continue();
          this.storage.set('logado', true);
        } else if (error.code = 'auth/invalid-email') {
          toast.setMessage('Email digitado não é válido.');
        }
        toast.present();
      });
    } else {
      toast.setMessage('Preencha todos os campos');
      toast.present();
    }
  }

  createFacebook() {
    let toast = this.toastCtrl.create({
      duration: 4000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'X',
    });
    return this.facebook.login(['email', 'public_profile']).then((res: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name, email', []).then(profile => {
        let user = new User(profile['email'], '15845514');
        this.authService.createUser(user).then((user: any) => {
          toast.setMessage('Usuário cadastrado com sucesso');
          toast.present();
          this.continue();
          this.storage.set('logado', true);
          this.storage.set('primeiroAcesso', true);
        }).catch((error: any) => {
          if (error.code = 'auth/email-already-in-use') {
            toast.setMessage('Olá ' + profile['name']);
            this.continue();
            this.storage.set('logado', true);
            this.storage.set('primeiroAcesso', true);
          } else if (error.code = 'auth/invalid-email') {
            toast.setMessage('Email digitado não é válido.');
          }
          toast.present();
        });
      });
    });
  }

  continue(): void {
    this.navCtrl.setRoot(HomePage);
  }
}
