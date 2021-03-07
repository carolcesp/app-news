import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment , { static: true }) segment: IonSegment;

  categorias = [
    'business','entertainment','general','healths','cience','sports','technology'
  ];

  noticias: Article[] = []

  constructor(private noticiaService: NoticiasService) {}

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.getNews(this.segment.value);
  }

  changeCategory(event) {
    console.log('change');

    this.noticias = [];
    this.getNews(event.detail.value);
  }

  getNews(categoria:string) {
    this.noticiaService.getTopHeadlinesCategory(categoria).subscribe(resp => {
      this.noticias.push(...resp.articles);
    })

  }

}
