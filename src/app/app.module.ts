import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { PokemonListComponent } from './components/organisms/pokemon-list/pokemon-list.component';
import { StringFilterPipe } from './pipes/string-filter.pipe';
import { ThemeVideoComponent } from './components/molecule/theme-video/theme-video.component';
import { FeatureResourceComponent } from './components/molecule/feature-resource/feature-resource.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonListComponent,
    StringFilterPipe,
    ThemeVideoComponent,
    FeatureResourceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
