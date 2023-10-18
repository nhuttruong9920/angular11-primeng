import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import * as ExcelJS from 'exceljs';

@Component({
  selector: 'app-export-charts',
  templateUrl: './export-charts.component.html',
  styleUrls: ['./export-charts.component.css']
})
export class ExportChartsComponent {
  @ViewChild('echartsContainer') echartsContainer!: ElementRef;
  options: any = []
  ngOnInit(): void {
    for (let i = 0; i < 50; i++) {
      this.options.push({
        title: {
          text: `Chart number ${i + 1}`
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100',]
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.generateRandomData(),
          type: 'line'
          ,
        }]
      })
    }
  }

  generateRandomData = () => {
    const numDataPoints = 100;
    const data = [];
    for (let i = 0; i < numDataPoints; i++) {
      data.push(Math.floor(Math.random() * 1000));
    }
    return data;
  };

  exportAllChartOptions() {
    const workbook = new ExcelJS.Workbook();
    const chartWorksheet = workbook.addWorksheet('Chart Sheet');

    const chartWidth = 2000;
    const chartHeight = 500;

    const chartImageIds = [];

    for (let i = 0; i < this.options.length; i++) {
      const chart = echarts.init(this.echartsContainer.nativeElement);
      chart.setOption(this.options[i]);
      chart.resize({ width: chartWidth, height: chartHeight });

      const dataURL = chart.getDataURL({ backgroundColor: '#fff' });

      const imageId = workbook.addImage({
        base64: dataURL,
        extension: 'png',
      });

      chartImageIds.push(imageId);

      chart.dispose();
    }

    for (let i = 0; i < chartImageIds.length; i++) {
      const col = 2;
      const row = i * 30 + 2;

      chartWorksheet.addImage(chartImageIds[i], {
        tl: { col, row },
        ext: { width: chartWidth, height: chartHeight },
      });
    }

    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = `reports_demo.xlsx`;
      a.click();
    });
  }

}
