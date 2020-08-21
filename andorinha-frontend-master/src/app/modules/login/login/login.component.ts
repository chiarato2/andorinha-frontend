import { Component, OnInit } from '@angular/core';
import { AuthDto } from 'src/app/shared/models/authDto';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public authDto: AuthDto = new AuthDto();

  constructor(private toast: ToastrService, private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  public login(formularioValido: boolean) {
    if (formularioValido) {
      this.api.login().login(this.authDto).subscribe((res: any) => {
        sessionStorage.setItem('token', res.headers.get('token'));
        this.router.navigate(['app/home']);
      });
    } else {
      this.toast.error('Preencha todos os campos obrigatórios', 'Atenção');
     }
  }

  exibirBotao() {
    let exibir = false;

    if (this.authDto.senha && this.authDto.usuario) {
      exibir = true;
    }

    return exibir;
  }

}
