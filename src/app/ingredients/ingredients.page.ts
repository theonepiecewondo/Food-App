import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {
  data: any;

 constructor(private route: ActivatedRoute, private router: Router) {
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.data = JSON.parse(params.special);
    }
    console.log(this.data);
  });
  }

  ngOnInit() {
  }

}
