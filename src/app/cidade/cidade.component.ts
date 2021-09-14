import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidades:any=[];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.cidadeService.listar().subscribe(dados=> this.cidades = dados);
  }
}
