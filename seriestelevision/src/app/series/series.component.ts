import { Component, OnInit } from '@angular/core';
import { Serie } from "./serie";
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0; 

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAverageSeasons(); // Calcula el promedio después de obtener las series
    });
  }

  calculateAverageSeasons() {
    if (this.series.length > 0) {
      const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.averageSeasons = totalSeasons / this.series.length;
    }
  }

  ngOnInit() {
    this.getSeries();
  }
}
