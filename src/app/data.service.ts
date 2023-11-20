import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      id: 1,
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Vélo de course",
      urlImg: "../assets/velo.jpg",
      textALtImg: "Vélo de course",
      dispo: false
    },
    {
      id: 2,
      titreArticle: "TV",
      prixArticle: 230,
      description: "TV 4K",
      urlImg: "../assets/tv.png",
      textALtImg: "TV 4K",
      dispo: true
    },
    {
      id: 3,
      titreArticle: "Jouet pour enfant",
      prixArticle: 15,
      description: "Jouet pour enfant",
      urlImg: "../assets/jouet.jpg",
      textALtImg: "Jouet pour enfant",
      dispo: true
    }
  ]
  constructor() { }

  // get article by id
  getArticle(id: number) {
    const article = this.listeArticles.find(
      (s) => {
        return s.id === id;
      }
    );
    return article;
  }
}
