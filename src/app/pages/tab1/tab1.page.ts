import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor(private noticiasServices: NoticiasService) {}

  ngOnInit() {
   this.noticiasServices.getTopHeadlines().subscribe(resp => {
    console.log('noticias',resp)

    // this.noticias = resp.articles;
    // inserta de manera independiente cada articulo
    this.noticias.push(...resp.articles)
   });


  }

}
