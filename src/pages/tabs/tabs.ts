import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {GreecePage} from '../greece/greece';
import {DemoPage} from "../demo/demo";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = GreecePage;
    tab3Root = DemoPage;
    tab4Root = AboutPage;
    tab5Root = ContactPage;

    constructor() {

    }
}
