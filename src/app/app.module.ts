import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdsComponent } from './ads/ads.component';
import { FooterComponent } from './footer/footer.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { FashionGridComponent } from './fashion-grid/fashion-grid.component';
import { ShopNowComponent } from './shop-now/shop-now.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdsComponent,
    FooterComponent,
    BottomBarComponent,
    FashionGridComponent,
    ShopNowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
