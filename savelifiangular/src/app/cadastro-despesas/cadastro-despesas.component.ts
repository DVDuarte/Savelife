import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Despesa } from '../despesa.model';
import { DespesaService } from '../despesa.service';

@Component({
  selector: 'app-cadastro-despesas',
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './cadastro-despesas.component.html',
  styleUrls: ['./cadastro-despesas.component.scss']
})
export class CadastroDespesasComponent implements OnInit {

  despesa: Despesa = {
    descricao: '',
    valor: null,
    data: ''
  };

  constructor(private service: DespesaService, private router: Router) { }

  ngOnInit(): void {
  }

  createDespesa(): void {
    this.service.create(this.despesa).subscribe(() => {
      this.service.showMessage("Despesa criada com sucesso!");
      this.router.navigate(["/despesas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/despesas"]);
  }
}