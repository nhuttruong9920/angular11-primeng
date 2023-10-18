import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import 'leaflet.fullscreen';
import 'leaflet-ant-path';
import 'leaflet.gridlayer.googlemutant';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  isFullscreen: boolean = false;
  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap(): void {
    //initial map
    this.map = L.map('map', { attributionControl: false }).setView(
      [11.1619, 106.5938],
      8
    );

    //add fullscreen button - plugins
    L.control
      .fullscreen({
        position: 'topleft',
        title: 'Show me the fullscreen !',
        titleCancel: 'Exit fullscreen mode',
        content: '',
        forceSeparateButton: true,
        forcePseudoFullscreen: true,
        fullscreenElement: false,
      })
      .addTo(this.map);

    this.map.on('enterFullscreen', () => {
      this.isFullscreen = true;
    });

    this.map.on('exitFullscreen', () => {
      this.isFullscreen = false;
    });

    //ant-path
    // const antPath = L.polyline.antPath(
    //   [
    //     [48.43807, 2.53917],
    //     [10.326763, 106.326298],
    //   ],
    //   {
    //     color: 'red',
    //     dashArray: [10, 20],
    //   }
    // ).addTo(this.map);

    //add geofence - plugins
    this.map.pm.addControls({
      position: 'topleft',
      drawMarker: true,
      drawPolyline: true,
      drawRectangle: true,
      drawPolygon: true,
      drawCircleMarker: false,
      editControls: false,
      dragMode: false,
      cutPolygon: false,
      removalMode: false,
      drawText: false,
      drawCircle: true,
    });

    this.map.on('pm:create', (e) => {
      if (e.layer instanceof L.Polyline) {
        // Generate a random color for the polyline
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);

        // Set the random color for the polyline
        e.layer.setStyle({ color: randomColor });
      }
    });

    //default layer
    const layer = L.gridLayer.googleMutant({
      type: 'roadmap',
    });

    layer.addTo(this.map);

    // Define the custom marker icon
    const customIcon = L.icon({
      iconUrl: 'assets/marker-icon.png',
      iconSize: [50, 50],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    //Layer group
    const markerLayer = L.layerGroup();
    const polylineLayer = L.layerGroup();
    const polygonLayer = L.layerGroup();

    markerLayer.addTo(this.map); //check or uncheck state
    polylineLayer.addTo(this.map);
    polygonLayer.addTo(this.map);

    const marker1 = L.marker([11.1619, 106.5938], {
      icon: customIcon,
    }).bindPopup('A car!!');
    const marker2 = L.marker([15.1619, 107.7938], {
      icon: customIcon,
    }).bindPopup('A car!!');
    const marker3 = L.marker([10.1619, 105.5938], {
      icon: customIcon,
    }).bindPopup('A car!!');
    markerLayer.addLayer(marker1);
    markerLayer.addLayer(marker2);
    markerLayer.addLayer(marker3);

    const polygon1 = L.polygon(
      [
        {
          lat: 10.725381285457912,
          lng: 106.01806640625001,
        },
        {
          lat: 17.978733095556183,
          lng: 106.01806640625001,
        },
        {
          lat: 17.978733095556183,
          lng: 115.31250000000001,
        },
        {
          lat: 10.725381285457912,
          lng: 115.31250000000001,
        },
      ],
      { color: '#d8331a' }
    );
    polygonLayer.addLayer(polygon1);

    const polygon2 = L.polygon([
      [15.1619, 107.7938],
      [15.1619, 107.7948],
      [15.1629, 107.7948],
    ]);
    polygonLayer.addLayer(polygon2);

    const googleRoadmap = L.gridLayer.googleMutant({
      type: 'roadmap',
    });
    const googleRoadmap1 = L.gridLayer.googleMutant({
      type: 'terrain',
    });
    const googleSatellite = L.gridLayer.googleMutant({
      type: 'satellite',
    });

    const googleHybrid = L.gridLayer.googleMutant({
      type: 'hybrid',
    });
    const baseLayer = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );

    const satelliteLayer = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    );
    const op = L.tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
    );
    const layers = {
      'Google roadmap': googleRoadmap,
      'Google Satellite': googleSatellite,
      'Google Hybrid': googleHybrid,
      'Open Street Map': baseLayer,
      Satellite: satelliteLayer,
      qqweqw: googleRoadmap1,
      saasdd: op,
    };
    const overlays = {
      Markers: markerLayer,
      Polygons: polygonLayer,
    };

    // Create the layers control
    L.control.layers(layers, overlays).addTo(this.map);
  }
}
