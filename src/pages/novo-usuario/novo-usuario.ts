import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-novo-usuario',
  templateUrl: 'novo-usuario.html',
})
export class NovoUsuarioPage {

  @ViewChild('usuario') email;
  @ViewChild('senha') senha;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth,
    public menuCtrl: MenuController, 
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad(){
    this.menuCtrl.enable(false);
  }

  cadastrar() {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
    .then(()=>{
      this.msgSucesso();
    })
    .catch(()=>{
    this.msgErro();
    })
  }

  msgSucesso() {
    const toast = this.toastCtrl.create({
      message: 'Cadastro Realizado',
      duration: 3000
    });
    toast.present();
  }
  msgErro() {
    const toast = this.toastCtrl.create({
      message: 'Erro ao cadastrar',
      duration: 3000
    });
    toast.present();
  }
}
