import { Component } from "@angular/core";
import { MovieService } from "../../services/movies.service";

@Component({
  selector: "movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent {
  popularList: Array<Object>;
  theatersList: Array<Object>;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

    this._movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }
}
