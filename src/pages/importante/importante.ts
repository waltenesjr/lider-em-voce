import {Component, Injector} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';

/**
 * Generated class for the ImportantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-importante',
  templateUrl: 'importante.html'
})
export class ImportantePage {

  public form: FormGroup;
  public fb: FormBuilder;

  constructor(private toastCtrl: ToastController, private injector: Injector, public navCtrl: NavController, public navParams: NavParams) {
    this.initForm();
  }

  initForm(): void {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      pergunta1: this.fb.control(null),
      pergunta2: this.fb.control(null),
      notaUtilizando: this.fb.control(1),
      notaPerfil: this.fb.control(1),
      notaAtualizar: this.fb.control(1),
      notaSeja: this.fb.control(1),
      notaPratique: this.fb.control(1),
      notaVideos: this.fb.control(1),
      notaRecursos: this.fb.control(1),
      pergunta3: this.fb.control(null),
      pergunta4: this.fb.control(null)
    });
  }

  enviar(): void {
    let toast = this.toastCtrl.create({
      duration: 30000,
      position: 'middle',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.setMessage('Sugestões enviadas com sucesso! Obrigado!');
    // toast.setMessage(JSON.stringify(this.form.value));
    toast.present();
    this.form.reset();
  }
}
