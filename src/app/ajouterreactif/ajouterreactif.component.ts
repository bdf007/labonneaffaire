import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouterreactif',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ajouterreactif.component.html',
  styleUrl: './ajouterreactif.component.css'
})
export class AjouterreactifComponent implements OnInit {
  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }

}
