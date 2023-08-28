import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { LanguageComponent } from './language/language.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    DemoDialogComponent,

  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    BreadcrumbModule,
    RatingModule,
    PanelMenuModule,
    CalendarModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    TableModule,
    InputTextModule,
    FormsModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
