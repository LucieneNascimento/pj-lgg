import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

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

  logar() {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=>{
        this.msgSucesso();
      })
      .catch(()=>{
        this.msgErro();
      })
  }

  msgSucesso() {
    const toast = this.toastCtrl.create({
      message: 'Logado com Sucesso',
      duration: 3000
    });
    toast.present();
  }
  msgErro() {
    const toast = this.toastCtrl.create({
      message: 'E-mail ou senha inválida',
      duration: 3000
    });
    toast.present();
  }
  


  novoUsuario() {
    this.navCtrl.push('NovoUsuarioPage');
  }


}