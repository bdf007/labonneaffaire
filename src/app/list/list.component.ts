import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { ArticleComponent } from '../article/article.component';
import  { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ArticleComponent, DetailComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [
    DataService]
})
export class ListComponent implements OnInit {
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
