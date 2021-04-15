import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input('datosNoticia') noticia: Article;
  @Input() indice: number

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  openNews() {
    const browser = this.iab.create(this.noticia.url,'_system');
  }

}
