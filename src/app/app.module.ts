import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersListComponent } from './pages/characters/characters-list/characters-list.component';
import { CharactersFormComponent } from './pages/characters/characters-form/characters-form.component';
import { CharactersCardComponent } from './pages/characters/characters-card/characters-card.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    CharactersListComponent,
    CharactersFormComponent,
    CharactersCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
