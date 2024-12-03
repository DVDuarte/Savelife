import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Para formulários template-driven
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importando o componente standalone
import { CadastroDespesasComponent } from './cadastro-despesas/cadastro-despesas.component';

@NgModule({
  declarations: [
    AppComponent // Apenas o componente principal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,

    // Importando o componente standalone
    CadastroDespesasComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
