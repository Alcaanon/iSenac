import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interface/login'; 
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private formBuilder:  FormBuilder,
    private usersService: UsuarioService,
    private router: Router,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.validaForm();
  }
  formulario!: FormGroup;

  validaForm(){
    this.formulario = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }
  login: Login = {
    usuario: "",
    senha: ""
  }

  validateInputs() {
    console.log(this.login);
    let usuario = this.login.usuario.trim();
    let senha = this.login.senha.trim();
    return (
      this.login.usuario &&
      this.login.senha &&
      usuario.length > 0 &&
      senha.length > 0
    );
  }

  logar(){
    if (this.validateInputs()) {
      this.usersService.login(this.login).subscribe(
        (res: any) => {
          if (res.userData) {
            this.router.navigate(['inicio']);
          } else {
            this.toastService.presentToast('Usuário ou senha incorretos.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Problema de conexão.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Coloque o usuário ou senha.'
      );
    }
  }
}
