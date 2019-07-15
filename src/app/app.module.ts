import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './boton/boton.component';
import { TallerComponent } from './taller/taller.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
//import { FormSchemaComponent} from './formulario-dinamico/formulario-dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    TallerComponent,
    FormularioReactivoComponent,
   // FormSchemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
