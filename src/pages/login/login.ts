import {Component, Injector} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Storage} from '@ionic/storage';
import {User} from '../../providers/auth/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../providers/auth/auth-service';

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
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    toast.setMessage('Tentando cadastrar usuário');
    toast.present();
    if (this.form.valid) {
      let user = new User(this.form.controls['email'].value, this.form.controls['password'].value);
      this.authService.createUser(user).then((user: any) => {
        toast.setMessage('Usuário cadastrado com sucesso');
        toast.present();
        this.continue();
      }).catch((error: any) => {
        toast.setMessage('Erro ao cadastrar usuário - ' + error.message);
        toast.present();
      });
    }
  }

  createFacebook() {
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    toast.setMessage('Tentando cadastrar usuário');
    toast.present();
    this.authService.createUserFacebook().then((user: any) => {
      toast.setMessage('Usuário cadastrado com sucesso');
      toast.present();
      this.continue();
    }).catch((error: any) => {
      toast.setMessage('Erro ao cadastrar usuário - ' + error.message);
      toast.present();
    });
  }

  continue(): void {
    this.storage.set('cadastrado', true);
    this.navCtrl.setRoot(HomePage);
  }
}
