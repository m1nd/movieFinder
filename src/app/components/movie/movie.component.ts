import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { MovieService } from "../../services/movies.service";

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent {
  movie: Object;

  constructor(
    private router: ActivatedRoute,
    private _movieService: MovieService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      let id = params["id"];
      this._movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
    });
  }
}
