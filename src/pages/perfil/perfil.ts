import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  etapa: number;
  quantPergunA: number;
  quantPergunB: number;
  quantPergunC: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.etapa = 1;
    this.quantPergunA = 0;
    this.quantPergunB = 0;
    this.quantPergunC = 0;
  }

  changeList(pergunta: string) {
    this.contarPergunta(pergunta);
    setTimeout(() => {
      this.etapa++;
    }, 500);
  }

  getResult(pergunta: string) {
    this.contarPergunta(pergunta);
    this.navCtrl.setRoot(HomePage);
    if (this.quantPergunA > this.quantPergunB) {
      if (this.quantPergunA > this.quantPergunC) {
        alert('Atualmente seu perfil/estilo de liderança é autossabotador. Você tem crenças enrijecidas sobre si mesmo, se vendo mais limitado do que realmente é. Sua realidade esta muito mais favorável do que imagina. A notícia boa e positiva é que comportamento não é destino nem imutável, Você pode melhorar. Elimine comportamentos incoerentes e autossabotadores que dificultam sua assertividade diante da realidade que tem e desenvolva sua autoconfiança fortalecendo sua autoliderança emocional. Aprenda como fazer isto neste aplicativo.');
      } else {
        alert('Atualmente seu perfil/estilo é de um líder autoconfiante. Tem foco, exerce disciplina para atingir seus propósitos estabelece metas alcançáveis dentro de sua realidade. Persiste em seus objetivos. Se automotiva quando necessário. Lida com seus erros, reconhece seus fracassos, comemora seus acertos e reconhece seu sucesso. Sua vida tem sentido para você. Não desenvolve comportamentos autossabotadores em excesso, e constrói comportamentos autoconfiantes. Continue assim exercendo e fortalecendo sua autoliderança emocional. Aprenda como fazer isto neste aplicativo.');
      }
    } else {
      if (this.quantPergunB > this.quantPergunC) {
        alert('Atualmente seu perfil/estilo de liderança está em processo. Em alguns momentos se autossabota em outros se autoconfia. Este é um momento que exige atenção, vigilância e cuidados da sua parte, para se conscientizar deste comportamento e ter disciplina para diminuir ou eliminar as atitudes autossabotadoras que te prejudicam a atingir seus objetivos e alcançar o que quer. E também fortalecer as atitudes autoconfiantes, construindo assim novos hábitos assertivos para sua vida. Aprenda como fazer isto neste aplicativo.');
      } else {
        alert('Atualmente seu perfil/estilo é de um líder autoconfiante. Tem foco, exerce disciplina para atingir seus propósitos estabelece metas alcançáveis dentro de sua realidade. Persiste em seus objetivos. Se automotiva quando necessário. Lida com seus erros, reconhece seus fracassos, comemora seus acertos e reconhece seu sucesso. Sua vida tem sentido para você. Não desenvolve comportamentos autossabotadores em excesso, e constrói comportamentos autoconfiantes. Continue assim exercendo e fortalecendo sua autoliderança emocional. Aprenda como fazer isto neste aplicativo.');
      }
    }
  }

  contarPergunta(pergunta: string) {
    if (pergunta === 'a') {
      this.quantPergunA++;
    } else if (pergunta === 'b') {
      this.quantPergunB++;
    } else {
      this.quantPergunC++;
    }
  }
}
