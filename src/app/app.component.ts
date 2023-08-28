import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('echartsContainer') echartsContainer!: ElementRef;
  demoOptions: any;
  ngAfterViewInit(): void {
    this.initECharts();
  }
  img = new Image();
  options = [{
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'bar'
    }]
  }, {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }]
  }, {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'pie'
    }]
  }]
  initECharts(): void {
    const chart = echarts.init(this.echartsContainer.nativeElement);
    chart.setOption(this.options[0]);
  }

  exportAllChartOptions(): void {
    for (let i = 0; i < this.options.length; i++) {
      const chart = echarts.init(this.echartsContainer.nativeElement);
      chart.setOption(this.options[i]);

      chart.resize({
        width: 600,
        height: 600
      });

      const dataURL = chart.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
      });

      const anchor = document.createElement('a');
      anchor.href = dataURL;
      anchor.download = `chart_${i}.png`;
      anchor.click();

      chart.dispose();
    }
  }
}
