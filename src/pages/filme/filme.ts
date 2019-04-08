import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filme';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',
})
export class FilmePage {

  filme: Filme [] = [];
  firestore = firebase.firestore();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmePage');
  }

  getList(){ // Retorna a lista de clientes
    firebase.firestore().collection("filme").get().then(query => { // Retorna coleção cliente
      query.forEach(doc => { // Comando de repetição 
        let fi = new Filme (); // A cada repetição, cria um objeto
        fi.id = doc.id; // Pega o ID do documento
        fi.setDados(doc.data()); // adiciona os dados do firebase no objeto
        
        this.filme.push(fi); // adiciona na lista de clientes
      });
    });
  }

  detalhe(fi: Filme){
    this.navCtrl.push('FilmeDetalhePage', {'filme':fi});
  }

}
