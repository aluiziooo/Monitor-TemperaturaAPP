import { newArray } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidade!:string;
  cidades:any=[];
  state = false;
  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.cidadeService.listar().subscribe(dados=> this.cidades = dados);
    console.log(this.cidades);
  }
  alterarEstado(cidade:string){
    if(cidade==null && cidade!=''){
      this.state=!this.state;
      console.log(this.state);
    } else{
      this.cidadeService.deleteCidade(cidade).subscribe(dados => console.log(dados));
      alert("cidade desativada");
    }
  }
}
