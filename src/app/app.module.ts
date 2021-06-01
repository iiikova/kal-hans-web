import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { FreeFromComponent } from './components/free-from/free-from.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { SceenCreamComponent } from './components/sceen-cream/sceen-cream.component';
import { BrandsComponent } from './components/brands/brands.component';
import { SkinDeservesComponent } from './components/skin-deserves/skin-deserves.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductComponent,
    FreeFromComponent,
    InstagramComponent,
    SceenCreamComponent,
    BrandsComponent,
    SkinDeservesComponent,
    NewsletterComponent,
    OurStoryComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
