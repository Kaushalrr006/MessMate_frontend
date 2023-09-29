import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedRating: number = 0;

  highlightStar(rating: number) {
    this.selectedRating = rating;
  }

  rate(rating: number) {
    // logic likhna hai .
   
    console.log(`Rated with ${rating} stars`);
  }
}
