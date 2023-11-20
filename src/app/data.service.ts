import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Vélo de course",
      urlImg: "../assets/velo.jpg",
      textALtImg: "Vélo de course",
      dispo: false
    },
    {
      titreArticle: "TV",
      prixArticle: 230,
      description: "TV 4K",
      urlImg: "../assets/tv.png",
      textALtImg: "TV 4K",
      dispo: true
    },
    {
      titreArticle: "Jouet pour enfant",
      prixArticle: 15,
      description: "Jouet pour enfant",
      urlImg: "../assets/jouet.jpg",
      textALtImg: "Jouet pour enfant",
      dispo: true
    }
  ]
  constructor() { }
}
