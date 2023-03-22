import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SvgIconsModule } from '@ngneat/svg-icon';

import { AppRoutingModule } from './app-routing.module';

import { TranslatePipe } from './pipes/translate.pipe';

import { AppComponent } from './app.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { AddOnStoreComponent } from './components/add-on-store/add-on-store.component';
import { MyAddOnsComponent } from './components/my-add-ons/my-add-ons.component';
import { AddOnCardComponent } from './components/add-on-card/add-on-card.component';
import { AddOnPreviewComponent } from './components/add-on-preview/add-on-preview.component';

import { TranslateService } from './services/translate.service';
import icons from '../assets/svg/svg-icons';

const modules = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  SvgIconsModule.forRoot({ icons })
];

const pipes = [
  TranslatePipe
];

const components = [
  AppComponent,
  TopPanelComponent,
  FooterComponent,
  HomeComponent,
  HeroComponent,
  ProductsComponent,
  AddOnStoreComponent,
  MyAddOnsComponent,
  AddOnCardComponent,
  AddOnPreviewComponent
];

@NgModule({
  declarations: [
    pipes,
    components
  ],
  imports: [
    modules
  ],
  providers: [
    TranslatePipe,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslation,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function setupTranslation(service: TranslateService): any {
  return () => service.use('en');
}
