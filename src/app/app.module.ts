import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdsComponent } from './ads/ads.component';
import { FooterComponent } from './footer/footer.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { FashionGridComponent } from './fashion-grid/fashion-grid.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { ClothesDisplayComponent } from './clothes-display/clothes-display.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdsComponent,
    FooterComponent,
    BottomBarComponent,
    FashionGridComponent,
    ShopNowComponent,
    ClothesDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
