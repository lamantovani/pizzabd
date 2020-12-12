import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menug',
  templateUrl: './menug.component.html',
  styleUrls: ['./menug.component.scss']
})
export class MenugComponent implements OnInit {

  nome: string;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.nome = 'Burno Daniel Galvani';
  }

  public onClickMenu(route: string) {
    this.route.navigate([route]);
  }



}
