import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css'],
})
export class LogoAPComponent implements OnInit {
  IsLogged = false;

  constructor(private router:Router, private tokenService: TokenService) {}
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.IsLogged=true;
    }else{
      this.IsLogged=false;
    }

  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }
}
