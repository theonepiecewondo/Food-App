import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    ing = [
      'Pizza Dough','Pizza Sauce','Pepperoni','Cheese','Dough'
    ];
    
  constructor(private router: Router,private dataService: DataService) {}
    openIngredients(){
      let NavigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.ing)
        }
      };
    this.router.navigate(['ingredients'],NavigationExtras);
    }
}
