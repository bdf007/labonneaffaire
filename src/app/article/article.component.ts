import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
 // titreArticle: string = "Titre de l'article";
  // prixArticle: number = 12;
  textALtImg: string = "Titre alternatif de l'image";
  urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike: number = 0;
  comment: string = "Commentaire de l'article";

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Output() info = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {

  }

  onLike() {
    this.totalNbrLike++;
    this.info.emit(this.titreArticle);
  }

}
