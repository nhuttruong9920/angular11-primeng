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
import { PlainComponent } from './plain/plain.component';
import { ExportChartsComponent } from './export-charts/export-charts.component';
import { SwitchComponent } from './switch/switch.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MapComponent } from './map/map.component';
import { PrimengPanelmenuComponent } from './primeng-panelmenu/primeng-panelmenu.component';
import { SplitterComponent } from './splitter/splitter.component';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { InputtextComponent } from './inputtext/inputtext.component';
import { ClickOutsideMenuComponent } from './click-outside-menu/click-outside-menu.component';
import { ComponentAnimationComponent } from './component-animation/component-animation.component';
@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    DemoDialogComponent,
    PlainComponent,
    ExportChartsComponent,
    SwitchComponent,
    MapComponent,
    PrimengPanelmenuComponent,
    SplitterComponent,
    InputtextComponent,
    ClickOutsideMenuComponent,
    ComponentAnimationComponent,
  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BreadcrumbModule,
    InputSwitchModule,
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
    DropdownModule,
    SplitterModule,
    PanelModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
