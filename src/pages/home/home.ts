import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AmChartsService} from "@amcharts/amcharts3-angular";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    url = "";
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    piecesArray = [];
    selectedSight = "white-tower";
    missingPiece;
    previousPiece = null; //USED AT THE INITIAL SETUP OF THE GAME TO AVOID BACKTRACKING
    showPokeball = true;

    private chart: any;
    greeceDataProvider;

    constructor(public navCtrl: NavController, private AmCharts: AmChartsService) {
        this.greeceDataProvider = {
            map: "greeceLow",
            getAreasFromMap: true,
        }
    }

    ngOnInit() {
        this.chart = this.AmCharts.makeChart("world-map", {
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
                map: "worldHigh",
                // getAreasFromMap: true,
                areas: [
                    {
                        id: "GR",
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
