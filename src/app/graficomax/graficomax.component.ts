import { CidadeService } from './../cidade.service';
import { Chart, registerables } from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-graficomax',
  templateUrl: './graficomax.component.html',
  styleUrls: ['./graficomax.component.css']
})
export class GraficomaxComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') mychart!:ElementRef;
  grafico!:Chart;
  constructor(private cidadeService:CidadeService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.listar();
  }
  ngAfterViewInit(){
    this.grafico = new Chart(this.mychart.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
          labels: [],
          datasets: [{
              label: 'Temperaturas Maximas',
              data: [],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
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
  listar(){
    this.cidadeService.listarTempsMax().subscribe(dados => {
      var newData:any = [];
      var newLabels:any = [];
      dados.forEach((temps:any) => {
       newData.push(temps.temp);
       newLabels.push(temps.city_name);
      });
      this.grafico.data.datasets[0].data=newData;
      this.grafico.data.labels=newLabels;
      this.grafico.update();

    });
  }
}
