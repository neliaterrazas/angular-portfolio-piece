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
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
