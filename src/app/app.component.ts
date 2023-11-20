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
}
