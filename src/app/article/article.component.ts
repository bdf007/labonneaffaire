import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  totalNbrLike: number = 0;
  comment: string = "Commentaire de l'article";

  @Output() info = new EventEmitter<string>();
  
  @Input() idArticle: number;
  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() textALtImg: string;
  @Input() dispo: boolean;

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
