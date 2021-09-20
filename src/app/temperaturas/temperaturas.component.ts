import { CidadeService } from './../cidade.service';
import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables  } from 'chart.js';

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.css']
})
export class TemperaturasComponent implements OnInit, AfterViewInit{
  @ViewChild("myChart", {static:true}) myChart!: ElementRef;
  par = this.route.snapshot.paramMap.get('nome');
  grafico!: Chart;
  temperaturas:any=[];
  temperaturaslist!:any[];
  tempsList!:number[];


  constructor(private cidadeService:CidadeService, private route: ActivatedRoute) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    const par = this.route.snapshot.paramMap.get('nome');
    this.listaHistorico(par!);


  }
  ngAfterViewInit(){
    this.grafico = new Chart(this.myChart.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
          labels: [],
          datasets: [{
              label:'HISTORICO DE TEMPERATURA DE '+this.par?.toUpperCase(),
              data: [],
              backgroundColor:'rgba(63,81,181,1)',
              borderColor: 'rgba(63,81,181,1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }


  listaHistorico(nome: String){
    this.cidadeService.getHistorico(nome).subscribe(dados => {
      this.temperaturas = dados;
      var newData:any=[];
      var newLabels:any=[];
      this.temperaturas.temperaturas.forEach((temp:any) => {
        newLabels.push(temp.data);
        newData.push(temp.temp);
      });
      this.grafico.data.datasets[0].data=newData;
      this.grafico.data.labels=newLabels;
      this.grafico.update();
    });
  }



}
