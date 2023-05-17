import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomepageService } from 'src/app/services/homepage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  fullname!: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private homepageService: HomepageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.homepageService.getFullname().subscribe({
      next: (response) => {
        this.fullname = response.info.fullname;
        console.log(response.info.fullname);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
