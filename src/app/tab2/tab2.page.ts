import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ing = [
    'Pasta Noodles','Pasta Sauce','Cheese (optional)','Meatballs'
  ];
constructor(private router: Router) {}
  openIngredients(){
    let NavigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.ing)
      }
    };
  this.router.navigate(['ingredients'],NavigationExtras);
  }
}
