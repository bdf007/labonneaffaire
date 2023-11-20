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
 // textALtImg: string = "Titre alternatif de l'image";
 // urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike: number = 0;
  comment: string = "Commentaire de l'article";
  //dispo: boolean = false;

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() textALtImg: string;
  @Input() dispo: boolean;
  @Output() info = new EventEmitter<string>();

  jaime: boolean = true;


  constructor() { }

  ngOnInit(): void {

  }

  onLike() {
    if (this.jaime === true) {
      this.totalNbrLike++;
      this.jaime = false;
    } else {
      this.totalNbrLike--;
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor() {
    if (this.dispo === true) {
      return 'green';
    } else {
      return 'red';
    }
  }

}
