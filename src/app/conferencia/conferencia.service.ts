import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Conferencia } from './conferencia';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

  private apiUrl = environment.baseUrl + 'conferences.json';
  constructor(private http: HttpClient) { }

}
