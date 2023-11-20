import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ArticleComponent]
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
  constructor() { }
  ngOnInit(): void {
    console.log('Ici ngOninit');
  }
  prix1: number = 80;
  prix2: number = 230;
  prix3: number = 15;
  message: string = "";

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour " + arg;
  }
}
