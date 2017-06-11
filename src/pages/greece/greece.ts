import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {AmChartsService} from "@amcharts/amcharts3-angular";

@Component({
    selector: 'page-greece',
    templateUrl: 'greece.html',
})
export class GreecePage {

    private chart: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private AmCharts: AmChartsService) {

    }

    ngOnInit() {
        this.chart = this.AmCharts.makeChart("greece-map", {
            type: "map",
            theme: "light",
            pathToImages: "https://www.amcharts.com/lib/3/images/",
            zoomControl: {
                panControlEnabled : true,
                zoomControlEnabled : true,
                zoomInstantly: false
            },
            ballon: {
                color: "#000000"
            },
            areasSettings: {
                autoZoom: true,
                selectedColor: "#FF5722"
            },
            dataProvider: {
                map: "greeceHigh",
                // getAreasFromMap: true,
                areas: [
                    {
                        id: "GR-B",
                        color: '#2196F3'
                    }
                ]
            }
        });
    }

    ngOnDestroy() {
        this.AmCharts.destroyChart(this.chart);
    }

}
