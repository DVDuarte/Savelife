import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Despesa } from './despesa.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  baseUrl = "http://localhost:8080/api/despesa";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(this.baseUrl, despesa);
  }

  read(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(this.baseUrl);
  }

  readById(id: number): Observable<Despesa> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Despesa>(url);
  }

  update(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(this.baseUrl, despesa);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
