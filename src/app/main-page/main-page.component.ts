import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {ApiService} from "../api.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatTableModule, NgForOf],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

export class MainPageComponent implements OnInit {
  posts: any[] = [];
  stravadata: any[] = [];

  constructor(private apiService: ApiService) {
  }

  displayedColumns = ['title', 'body'];
  displayedColumsStrava: string[] = ['rank', 'athlete_id	', 'velocity	', 'elev_gain	', 'num_activities	', 'moving_time	', 'distance	', 'best_activities_distance	', 'best_activities_distance_activity_id	', 'athlete_firstname	', 'athlete_lastname	', 'athlete_picture_url	', 'athlete_member_type']

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });

    this.apiService.getData().subscribe((data) => {
      this.stravadata = data;
    });
  }
}
