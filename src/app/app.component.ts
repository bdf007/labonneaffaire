import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { DataService } from "./data.service";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, ArticleComponent],
  providers: [
    DataService]
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
  message: string = "";
  liste;
  constructor(private dataService: DataService) { 
  }
  
  ngOnInit(){
    this.liste = this.dataService.listeArticles;
  }
  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour :" + arg;
  } 
}
