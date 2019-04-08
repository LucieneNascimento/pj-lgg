import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmeCadastroPage } from './filme-cadastro';

@NgModule({
  declarations: [
    FilmeCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmeCadastroPage),
  ],
})
export class FilmeCadastroPageModule {}
