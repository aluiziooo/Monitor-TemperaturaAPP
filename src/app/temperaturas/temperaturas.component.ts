import { CidadeService } from './../cidade.service';
import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables  } from 'chart.js';

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.css']
})
export class TemperaturasComponent implements OnInit, AfterViewInit {
  @ViewChild("myChart", {static:true}) myChart!: ElementRef;

  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  data = {
    labels: this.labels,
    datasets: [{
      label: 'Historico de Temperatura',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  config = {
    type: 'line',
    data: this.data,
    options: {}
  };

  grafico:any;
  temperaturas:any=[];


  constructor(private cidadeService:CidadeService, private route: ActivatedRoute) {
    Chart.register(...registerables)
   }
  temperaturalist:any=[];


  ngOnInit(): void {
    const par = this.route.snapshot.paramMap.get('nome');
    this.listaHistorico(par!);
  }

  ngAfterViewInit(){
    this.grafico = new Chart(this.myChart.nativeElement, {type:'line',
    data:this.data
  });
  }
  listaHistorico(nome: String){
    this.cidadeService.getHistorico(nome).subscribe(dados => this.temperaturas = dados as []);
    this.temperaturalist = this.temperaturas.temperaturas;
    console.log(this.temperaturas);
  }


}
