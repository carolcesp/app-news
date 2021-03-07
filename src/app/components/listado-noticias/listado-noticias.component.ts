import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss'],
})
export class ListadoNoticiasComponent implements OnInit {

  @Input() noticias: Article[] = [];

  constructor(private noticiasServices: NoticiasService) {}

  ngOnInit() {
   this.noticiasServices.getTopHeadlines().subscribe(resp => {
    // this.noticias = resp.articles;
    // inserta de manera independiente cada articulo
    this.noticias.push(...resp.articles)
   });

  }

}
