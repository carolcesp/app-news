import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoNoticiasComponent } from './listado-noticias/listado-noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ListadoNoticiasComponent,
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ListadoNoticiasComponent,
  ]
})
export class ComponentsModule { }
