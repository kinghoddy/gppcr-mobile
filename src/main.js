import { Plugins } from '@capacitor/core';
import firebase from './firebaseConfig';
import 'firebase/database'
const ref = firebase.database().ref('/')
const body = document.body

const DM = () => {
    let theme = localStorage.getItem("gppcrTheme");
    if (!theme) {
        localStorage.setItem("gppcrTheme", "light");
        theme = "light";
    }
    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
};

const Update = () => {
    ref.on('value', s => {
        let version = '1.0';
        const onlineVersion = s.val().mobile.version;
        if (version !== onlineVersion) {
            const buttons = [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Update',
                    handler: () => {
                        const { Browser } = Plugins;
                        Browser.open({ url: 'https://kinghoddy.now.sh/projects/GPPCR Mobile', toolbarColor: '#22aa66' });
                    }
                }
            ];
            presentAlert('New version available', 'Update GPPCR Mobile to  ' + onlineVersion, buttons)
        }

    })
}


(function init() {
    DM()
    Update()
})()


function presentAlert(header, message, buttonss) {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = header;
    alert.message = message;
    alert.buttons = buttonss;
    document.body.appendChild(alert);
    return alert.present();
}
