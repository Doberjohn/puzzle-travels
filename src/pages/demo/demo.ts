import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-demo',
    templateUrl: 'demo.html',
})
export class DemoPage {

    url = "";
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    piecesArray = [];
    selectedSight = "white-tower";
    missingPiece;
    previousPiece = null; //USED AT THE INITIAL SETUP OF THE GAME TO AVOID BACKTRACKING
    showPokeball = true;

    constructor(public navCtrl: NavController) {
        this.missingPiece = 5;
        for (let i = 0; i < this.numbers.length; i++) {
            let part = {
                index: this.numbers[i],
                neighbours: [],
                url: this.numbers[i] !== this.missingPiece ? "assets/img/" + this.selectedSight + " (" + this.numbers[i] + ").png" : ""
            };
            this.piecesArray.push(part);
        }

        this.setNeighbours(0, [1, 3]);
        this.setNeighbours(1, [0, 2, 4]);
        this.setNeighbours(2, [1, 5]);
        this.setNeighbours(3, [0, 4, 6]);
        this.setNeighbours(4, [1, 3, 5, 7]);
        this.setNeighbours(5, [2, 4, 8]);
        this.setNeighbours(6, [3, 7]);
        this.setNeighbours(7, [4, 6, 8]);
        this.setNeighbours(8, [5, 7]);

        this.startGame();
    }

    startGame() {
        this.showPokeball = false;
        // for (let i=0; i<200; i++) {
        //     let neighbours = this.piecesArray[this.searchFoPieceIndex(this.missingPiece)].neighbours;
        //     let itemToMove = Math.floor((Math.random() * neighbours.length));
        //     while (itemToMove === this.previousPiece) {
        //         itemToMove = Math.floor((Math.random() * neighbours.length));
        //     }
        //     this.previousPiece = itemToMove;
        //     this.moveItem(this.piecesArray[this.searchFoPieceIndex(neighbours[itemToMove])]);
        // }
        this.moveItem(this.piecesArray[1]);
        this.moveItem(this.piecesArray[2]);
        this.moveItem(this.piecesArray[5]);
        this.moveItem(this.piecesArray[8]);
        this.moveItem(this.piecesArray[7]);
        this.moveItem(this.piecesArray[6]);
        this.moveItem(this.piecesArray[3]);
        this.moveItem(this.piecesArray[0]);
        this.moveItem(this.piecesArray[1]);
        this.moveItem(this.piecesArray[4]);
        this.moveItem(this.piecesArray[5]);
        this.moveItem(this.piecesArray[8]);
        this.moveItem(this.piecesArray[7]);
        this.moveItem(this.piecesArray[6]);
        this.moveItem(this.piecesArray[3]);
        this.moveItem(this.piecesArray[4]);
        this.moveItem(this.piecesArray[1]);
        this.moveItem(this.piecesArray[2]);
        this.moveItem(this.piecesArray[5]);
    }

    moveItem(clickedPiece) {
        if (clickedPiece['neighbours'].indexOf(this.missingPiece) !== -1) {
            let missingPieceIndex = this.searchFoPieceIndex(this.missingPiece);
            this.piecesArray[missingPieceIndex].url = clickedPiece.url;
            clickedPiece.url = "";
            this.missingPiece = clickedPiece.index;
        }
        if (this.gameHasEnded()) {
            console.log("Game has ended! You win!");
            let missingPieceIndex = this.searchFoPieceIndex(this.missingPiece);
            this.piecesArray[missingPieceIndex].url = "assets/img/" + this.selectedSight + " (" + this.missingPiece + ").png";
        }
    }

    searchFoPieceIndex(piece) {
        for (let i = 0; i < this.piecesArray.length; i++) {
            if (this.piecesArray[i].index === piece) {
                return i;
            }
        }
    }

    setNeighbours(itemIndex, neighboursIndices) {
        for (let i = 0; i < neighboursIndices.length; i++) {
            let newNeighbour = this.piecesArray[neighboursIndices[i]].index;
            this.piecesArray[itemIndex].neighbours.push(newNeighbour);
        }
    }

    gameHasEnded() {
        for (let i = 0; i < this.piecesArray.length; i++) {
            if (this.piecesArray[i].url != "") {
                if (i + 1 != this.piecesArray[i].url.match(/\((.*)\)/)[1]) {
                    return false;
                }
            }
        }
        this.showPokeball = true;
        return true;
    }

}
