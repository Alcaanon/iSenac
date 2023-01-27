import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  username!: string;
  password!: string;

  constructor(
    private usersService: UsuarioService,
    public navCtrl: NavController,
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const body = {
      username: this.username,
      password: this.password
    };
    this.usersService.login(body)
    .subscribe({
    next: (res) => {
    console.log(res);
    console.log('Usuário autenticado.')
    this.navCtrl.navigateForward('/inicio');
    },
    error: (e) => {
      console.error(e)
      console.log("Dados Enviados", body);
    }
    });
  }
}
