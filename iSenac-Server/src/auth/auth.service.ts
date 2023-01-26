import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt'
import { Usuario } from 'src/usuario/usuario.entity';

@Injectable()
export class AuthService {
    constructor(
      private usuarioService: UsuarioService,
    ) {}

    async validarUsuario(usuario: string, senha: string): Promise<any> {
      const user = await this.usuarioService.findOne(usuario);
      if (user && bcrypt.compareSync(senha, user.senha)) {
        const { senha, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
      const payload = { usuario: user.usuario, sub: user.id };
      return 'Hello usuario e senha.';
    }
   
}
