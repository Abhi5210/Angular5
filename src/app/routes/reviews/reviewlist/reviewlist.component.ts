import { Component, OnInit, Input } from '@angular/core';
import {review} from '../../../review';
import {ReviewService} from '../../../review.service';

@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewlistComponent implements OnInit {
  reviewlist : review[];
  constructor(private rs:ReviewService) { }

  ngOnInit() {
    this.rs.getReview().subscribe(
      (data:review[]) => {
        this.reviewlist = data;
      },
      (error)=>{
        alert('error')
      }
    );
  }
}
