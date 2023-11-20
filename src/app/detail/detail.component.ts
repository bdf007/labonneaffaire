import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule ],
  providers: [
    DataService],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  id;
  titre: string;
  prix: number;
  description: string;
  urlImg: string;
  textALtImg: string;

  constructor(private route: ActivatedRoute,
  private dataService: DataService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = id;
    const article = this.dataService.getArticle(+id);
    this.titre = article.titreArticle;
    this.prix = article.prixArticle;
    this.description = article.description;
    this.urlImg = article.urlImg;
    this.textALtImg = article.textALtImg;
  }

}
