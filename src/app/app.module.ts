import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import {
  LazyLoadImageModule,
  intersectionObserverPreset
} from "ng-lazyload-image";
// import { IntersectionObserverEntry } from "";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
