import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent implements OnInit {
  titleToAdd = "";
  priceToAdd = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const newTitle = this.titleToAdd;
    const newPrice = this.priceToAdd;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }

}
