import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SfcHeaderComponent } from './sfc-header/sfc-header.component';
import { SfcFooterComponent } from './sfc-footer/sfc-footer.component';
import { CardComponent } from './card/card.component';
import { QueroAdotarComponent } from './quero-adotar/quero-adotar.component';
import { IndexComponent } from './index/index.component';
import { FormsComponent } from './forms/forms.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    SfcHeaderComponent,
    SfcFooterComponent,
    CardComponent,
    QueroAdotarComponent,
    IndexComponent,
    FormsComponent,
    FormularioComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
