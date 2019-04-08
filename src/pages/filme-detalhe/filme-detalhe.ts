import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Filme } from '../../model/filme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../model/post';

@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html',
})
export class FilmeDetalhePage {

  uid : string;
  filme: Filme;
  formGroup : FormGroup;
  firestore = firebase.firestore();

  post: Post[] = [];
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.filme = this.navParams.get('filme');
    this.form();
  }
  ionViewDidLoad(){
    this.getPost();
  }

  getPost(){

    var postRef = firebase.firestore().collection("post");

    postRef.get().then(query => {
      query.forEach(doc => {
        let p = new Post();
        p.id = doc.id;
        p.setDados(doc.data());
        this.post.push(p);
      });
      console.log(this.post);
    });
    
  }

  form(){
    this.formGroup = this.formBuilder.group({    
      uid : ['', [Validators.required]],
      nome: ['', [Validators.required]],
      mensagem: ['', [Validators.required]]
    });
  }

  addPost(){
 


      // Tenta cadastrar a mensagem
      this.firestore.collection("post").add(this.formGroup.value)
        .then(ref => {
        // Sucesso
        this.post = [];
        this.getPost();
        
      }).catch(err => {
        console.log(err.message);
      });

}
getList(){

  var postRef = firebase.firestore().collection("post");

  postRef.get().then(query => {
    query.forEach(doc => {
      let p = new Post();
      p.id = doc.id;
      p.setDados(doc.data());
      this.post.push(p);
    });
    
  });
  
}

removerPost(id : string){

  this.firestore.collection('post').doc(id).delete().then(()=> {
    console.log("Documento deletado");
    this.post = [];
    this.getList();
  }).catch(function(error) {
    console.error("Error: ", error);
  });
}
    
  editar(post : Post){
    this.navCtrl.push('PostEditPage', {'post' : post})
  }
}