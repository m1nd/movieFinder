import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MoviesComponent } from "./components/movies/movies.component";

@NgModule({
  declarations: [AppComponent, MoviesComponent],
  imports: [BrowserModule, HttpModule, JsonpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
