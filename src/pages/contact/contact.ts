import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InAppBrowser, AppAvailability, Device } from 'ionic-native';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    constructor(public navCtrl: NavController) {

    }

    launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
        let app: string;
        if (Device.platform === 'iOS') {
            app = iosSchemaName;
        } else if (Device.platform === 'Android') {
            app = androidPackageName;
        } else {
            let browser = new InAppBrowser(httpUrl + username, '_system');
            return;
        }

        AppAvailability.check(app).then(
            () => { // success callback
                let browser = new InAppBrowser(appUrl + username, '_system');
            },
            () => { // error callback
                let browser = new InAppBrowser(httpUrl + username, '_system');
            }
        );
    }

    openInstagram(username: string) {
        this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
    }

    openFacebook(username: string) {
        this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
    }
}
