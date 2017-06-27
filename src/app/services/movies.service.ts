import { Injectable } from "@angular/core";
import { Jsonp } from "@angular/http";
import "rxjs/Rx";
import * as moment from "moment";

@Injectable()
export class MovieService {
  apikey: string;

  constructor(private __jsonp: Jsonp) {
    this.apikey = `550c6b53d7831c276feb2b57e51b1ebf`;
    console.log("MovieService Initialized...");
  }

  getPopular() {
    return this.__jsonp
      .get(
        `https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=${this
          .apikey}`
      )
      .map(res => res.json());
  }

  getInTheaters() {
    const olderDate = moment().subtract(1, "months").format("YYYY-MM-DD");
    const laterDate = moment().format("YYYY-MM-DD");

    console.log(`${olderDate} \n ${laterDate}`);
    return this.__jsonp
      .get(
        `https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=${olderDate}&primary_release_date.lte=${laterDate}&api_key=${this
          .apikey}`
      )
      .map(res => res.json());
  }

  searchMovies(searchStr: string) {
    return this.__jsonp
      .get(
        `https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=${searchStr}&sort_by=popularity.desc&api_key=${this
          .apikey}`
      )
      .map(res => res.json());
  }

  getMovie(id: string) {
    return this.__jsonp
      .get(
        `https://api.themoviedb.org/3/movie/${id}?callback=JSONP_CALLBACK&&api_key=${this
          .apikey}`
      )
      .map(res => res.json());
  }
}
