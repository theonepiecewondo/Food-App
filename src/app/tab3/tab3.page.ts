import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ing = [
    'Pumpkin Puree', 'Eggs', 'Vegetable oil', 'Water', 'Sugar','Flour','Baking Soda','Salt','Ground Cinnamon','Ground Nutmeg','Ground Cloves','Ground Ginger'
  ];
  constructor(private router: Router) { }
  openIngredients() {
    let NavigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.ing)
      }
    };
    this.router.navigate(['ingredients'], NavigationExtras);
  }
}
