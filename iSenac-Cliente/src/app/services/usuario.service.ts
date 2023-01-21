import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


const usuarioURL = 'http://localhost:3000/usuario/cadastrar';
const loginURL = 'http://localhost:3000/usuario/login';
const tokenURL = 'http://localhost:3000/usuario/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  create(data: any): Observable<any>{
    return this.httpClient.post(usuarioURL,data)
  }

  login(postData: any): Observable<any> {
    return this.httpClient.post(loginURL, postData);
  }

  logintoken(){

  }
}
